// ==========================================
// PAUUSE·PLAYY - SHOP / CART LOGIC
// ==========================================

// Catalogue produits
const PRODUCTS = {
  'pack-parcours-multimodal': {
    name: 'Boîte de jeu : Parcours Multimodal',
    subtitle: '2× Mur d\'Escalade + 2× Pédago Express',
    price: 199,
    image: 'images/pack_mur_pedagoexpress/pack1.JPG'
  }
};

const TVA_RATE = 0.20;
const STORAGE_KEY = 'pauuseplayy_cart';
const PROMO_KEY = 'pauuseplayy_promo';

// Codes promo valides (clé en uppercase, comparaison case-insensitive)
// type: 'fixed' (montant € sur TTC) ou 'percent' (pourcentage du TTC, 0–1)
// perItem: true → la réduction fixe s'applique à chaque article du panier
const PROMO_CODES = {
  'TACODAYS':    { type: 'fixed', value: 25, perItem: true, label: '−25 € par boîte' },
  'LUDINORDPRO': { type: 'fixed', value: 25, perItem: true, label: '−25 € par boîte' }
};

// ----- Cart state -----
function getCart() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch {
    return {};
  }
}

function saveCart(cart) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
  updateCartBadge();
  document.dispatchEvent(new CustomEvent('cart:change'));
}

function addToCart(productId, qty = 1) {
  const cart = getCart();
  cart[productId] = (cart[productId] || 0) + qty;
  saveCart(cart);
}

function setQuantity(productId, qty) {
  const cart = getCart();
  if (qty <= 0) {
    delete cart[productId];
  } else {
    cart[productId] = qty;
  }
  saveCart(cart);
}

function removeFromCart(productId) {
  setQuantity(productId, 0);
}

function clearCart() {
  localStorage.removeItem(STORAGE_KEY);
  localStorage.removeItem(PROMO_KEY);
  updateCartBadge();
}

// ----- Promo code -----
function getPromoCode() {
  return localStorage.getItem(PROMO_KEY) || '';
}

function setPromoCode(code) {
  const cleaned = (code || '').trim().toUpperCase();
  if (cleaned) {
    localStorage.setItem(PROMO_KEY, cleaned);
  } else {
    localStorage.removeItem(PROMO_KEY);
  }
  document.dispatchEvent(new CustomEvent('promo:change'));
}

function getPromoData() {
  const code = getPromoCode();
  if (!code) return null;
  const data = PROMO_CODES[code];
  if (!data) return null;
  return { code: code, ...data };
}

function isPromoValid(code) {
  return !!PROMO_CODES[(code || '').trim().toUpperCase()];
}

function getCartCount() {
  const cart = getCart();
  return Object.values(cart).reduce((sum, qty) => sum + qty, 0);
}

function getCartTotal() {
  const cart = getCart();
  let baseTtc = 0;
  Object.entries(cart).forEach(([id, qty]) => {
    const p = PRODUCTS[id];
    if (p) baseTtc += p.price * qty;
  });

  const promo = getPromoData();
  let discountTtc = 0;
  if (promo) {
    if (promo.type === 'percent') discountTtc = baseTtc * promo.value;
    else if (promo.type === 'fixed') {
      const itemCount = Object.values(cart).reduce((sum, q) => sum + q, 0);
      discountTtc = promo.perItem ? promo.value * itemCount : promo.value;
    }
    discountTtc = Math.min(discountTtc, baseTtc);
  }
  const ttc = baseTtc - discountTtc;
  const ht = ttc / (1 + TVA_RATE);
  const tva = ttc - ht;

  return {
    baseTtc: baseTtc,
    discountTtc: discountTtc,
    ht: ht,
    tva: tva,
    ttc: ttc,
    promo: promo
  };
}

function formatPrice(amount) {
  return amount.toFixed(2).replace('.', ',') + ' €';
}

// ----- Cart badge in nav -----
function updateCartBadge() {
  const count = getCartCount();
  document.querySelectorAll('.nav-cart-badge').forEach(badge => {
    badge.textContent = count;
    badge.classList.toggle('visible', count > 0);
  });
}

// ----- Toast notification -----
function showToast(message) {
  let toast = document.querySelector('.shop-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'shop-toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('visible');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove('visible'), 2200);
}

// Init on load
document.addEventListener('DOMContentLoaded', updateCartBadge);

// Expose globally
window.PauuseShop = {
  PRODUCTS, TVA_RATE, PROMO_CODES,
  getCart, addToCart, setQuantity, removeFromCart, clearCart,
  getCartCount, getCartTotal, formatPrice,
  getPromoCode, setPromoCode, getPromoData, isPromoValid
};
