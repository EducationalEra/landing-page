function runWfpWdgt() {
  var wayforpay = new Wayforpay();
  wayforpay.invoice('https://secure.wayforpay.com/button/b90c563f5a94b');
}
$('.wfp').click(function (e) {
  e.preventDefault()
  e.stopPropagation()
  runWfpWdgt()
})