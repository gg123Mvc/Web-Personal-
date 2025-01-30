jQuery(document).ready(function ($) {
  "use strict";

  //Contact
  $('form.contactForm').submit(function (e) {
    e.preventDefault(); // Mencegah reload halaman

    var f = $(this).find('.form-group'),
      ferror = false;

    // Validasi input
    f.children('input, textarea').each(function () {
      var i = $(this); // input saat ini
      var rule = i.attr('data-rule');

      if (rule !== undefined) {
        var ierror = false; // flag error
        switch (rule) {
          case 'required':
            if (i.val() === '') {
              ferror = ierror = true;
            }
            break;
          case 'minlen':
            if (i.val().length < parseInt(i.attr('data-rule-minlen'))) {
              ferror = ierror = true;
            }
            break;
          case 'email':
            var emailExp = /^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i;
            if (!emailExp.test(i.val())) {
              ferror = ierror = true;
            }
            break;
        }
        i.next('.validation').html(
          ierror ? (i.attr('data-msg') || 'wrong Input') : ''
        ).show('blind');
      }
    });

    if (ferror) return false;

    // Ambil data formulir
    var name = $('input[name="name"]').val();
    var email = $('input[name="email"]').val();
    var message = $('textarea[name="message"]').val();

    // Nomor WhatsApp tujuan
    var phone = "6283823283198"; // Ganti dengan nomor WhatsApp Anda (format internasional tanpa tanda +)

    // Format pesan WhatsApp
    var whatsappMessage =
      "Formulir pengembangan yang dikirim:\n\n" +
      "Nama: " + name + "\n" +
      "Email: " + email + "\n" +
      "Pesan: " + message;

    // Buat URL WhatsApp
    var whatsappURL =
      "https://wa.me/" + phone + "?text=" + encodeURIComponent(whatsappMessage);

    // Buka WhatsApp di tab baru
    window.open(whatsappURL, "_blank");
  });
});
