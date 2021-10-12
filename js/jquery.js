$(function () { 
    // Start Page Header
    $('.loading-page').fadeOut(3000, function (){
        $('.wrapper').fadeIn( );
    }); 

    // Sidebar show toggle
    $('.page-header .icon-cart').click(function (e) {
        e.preventDefault();
        $('.page-header .sidebar').toggleClass('show');
        $('.page-header .overlay').toggleClass('show');
    });
    $('.page-header .oc-toggle').click(function (e) {
        e.preventDefault();
        $(this).removeClass('show');
        $('.page-header .sidebar').removeClass('show');
        $('.page-header .overlay').toggleClass('show');
    }); 
    // Sidepro show toggle
    $('.settings_section .tab-pane .btn-edit').click(function (e) {
        e.preventDefault();
        $('.settings_section .sidepro').toggleClass('show');
        $('.settings_section .overlay').toggleClass('show');
    });
    $('.settings_section .oc-toggle').click(function (e) {
        e.preventDefault();
        $(this).removeClass('show');
        $('.settings_section .sidepro').removeClass('show');
        $('.settings_section .overlay').toggleClass('show');
    });
    // Sidepass show toggle
    $('.settings_section .tab-pane .change-pass').click(function (e) {
        e.preventDefault();
        $('.settings_section .sidepass').toggleClass('show');
        $('.settings_section .overlay').toggleClass('show');
    });
    $('.settings_section .oc-toggle').click(function (e) {
        e.preventDefault();
        $(this).removeClass('show');
        $('.settings_section .sidepass').removeClass('show');
    });
    // Sideord show toggle
    $('.settings_section .tab-pane .order-det').click(function (e) {
        e.preventDefault();
        $('.settings_section .sideord').toggleClass('show');
        $('.settings_section .overlay').toggleClass('show');
    });
    $('.settings_section .oc-toggle').click(function (e) {
        e.preventDefault();
        $(this).removeClass('show');
        $('.settings_section .sideord').removeClass('show');
    });
    // Sidebar show toggle
    $('.product-sec .btn-sub').click(function (e) {
        e.preventDefault();
        $('.page-header .sidebar').toggleClass('show');
        $('.page-header .overlay').toggleClass('show');
    });
    // Dropdown menu in sidecour
    $('.course-axes .sidecour .item-link.dropdown-list').click(function (e) { 
        e.preventDefault();
        $(this).parent().toggleClass('active').siblings('.item').removeClass('active');
        $(this).next('.n-list').toggleClass('show').slideToggle(400, function () {
            $('.course-axes .sidecour .n-list').not(this).slideUp();
        });
    });
    // Delete Product
    $(".close-pro .icon").first().click(function(){
        $('.cart-pro').first().css({
            "display": "none"
        });
    });
    $(".close-pro .icon").eq(1).click(function(){
        $('.cart-pro').eq(1).css({
            "display": "none"
        });
    });
    $(".close-pro .icon").last().click(function(){
        $('.cart-pro').last().css({
            "display": "none"
        });
    });
    // Cart Count
    $('.cart-pro input[type="number"]').niceNumber();
    // Product Count
    $('.product-sec input[type="number"]').niceNumber();
});