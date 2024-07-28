// Assuming you are using Firebase Firestore for coupon codes
var db = firebase.firestore();

function validateCoupon(code) {
  db.collection('coupons').doc(code).get().then((doc) => {
    if (doc.exists) {
      var coupon = doc.data();
      console.log('Coupon valid:', coupon);
      // Apply the coupon discount
    } else {
      console.log('Invalid coupon code');
    }
  }).catch((error) => {
    console.log('Error validating coupon code:', error);
  });
}
