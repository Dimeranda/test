$(function() {

    var $tabsComponent = $('.tabsComponent');
    var $tabs = $('.tabs', $tabsComponent);
    var $tabsItems = $('.tab', $tabs);
    var $tabsContent = $('.tabsContent', $tabsComponent);
    var $tabsContentItems = $('.tabContent', $tabsContent);

    $tabsComponent.on('click', '.tab', function () {
        var $tab = $(this);
        var index = $tab.index();

        $tabsItems.add($tabsContentItems).removeClass('active');
        $tab.add($tabsContentItems.eq(index)).addClass('active');
    });

    $tabsComponent.on('click', '.toggler', function () {
        var $toggler = $(this);
        var $tab = $toggler.closest('.tab');
        var $description = $tab.find('.description');
        var $icon = $tab.find('.icon');
        var $neighborTab =$tab.siblings('.tab');
        var $neighborDescription = $neighborTab.find('.description');
        var $neighborIcon = $neighborTab.find('.icon');
        var $neighborType =  $neighborTab.find('.code');
        var index = $tab.index();

        $description.toggleClass('active');
        $icon.toggleClass('activeIcon');
        $tab.find('.code').remove();

        if($description.hasClass('active')){

            $neighborDescription.removeClass('active');
            $neighborIcon.removeClass('activeIcon');
            $neighborType.remove();

        }


    });






    $tabsComponent.on('click', '.viewCode', function () {

        var $tab = $(this).closest('.tab');
        var index = $tab.index();
        var $description = $tab.find('.description');
        var $code = $tabsContentItems.eq(index).find('code');

        if (($tab.find('.code')).length <= 0) {
            $code.clone().appendTo($tab).show();
        } else {
            $tab.find('.code').remove();
        }


    });



    var $slider = $('.slider');
    var $sliderNav= $('.sliderNav', $slider);
    var $navItems = $('.nav', $sliderNav);
    var $sliderContent = $('.sliderContent', $slider);
    var $navContentItems = $('.navContent', $sliderContent);


    $slider.on('click', '.nav', function () {
        var $nav = $(this);
        var $index = $nav.index();

        $navItems.add($navContentItems).removeClass('active');
        $nav.add($navContentItems.eq($index)).addClass('active');

    });


    function size(){

        var page = $('html').width();

        if (page >= '767') {
            $('.tab').children('.code').remove();

        }
    }


    var $menu = $('.menu');
    var $header = $('header');
    var $headerHeight = $header.height();
    var $headerWidth = $header.width();
    var $menuHeight = $menu.height();
    var mobNav = $('.mobNav');

    $(window).on('resize', function() {
        size();

        $headerHeight = $header.height();

        if($headerWidth >= '366'){


            if (($(this).scrollTop() >= $headerHeight + $menuHeight)){

                $menu.addClass('menuBackground');
                $('.menuBlock').css('display','inline-block');

            }
            else{
                if(mobNav.hasClass('show')){
                    $menu.addClass('menuBackground');
                }
                else  $menu.removeClass('menuBackground');
                $('.menuBlock').css('display','none');

            }
        }
       else {
            console.log('max');
            if (($(this).scrollTop() >= $headerHeight - $menuHeight )) {

                $menu.addClass('menuBackground');
                $('.menuBlock').css('display', 'inline-block');

            }
            else {
                if (mobNav.hasClass('show')) {
                    $menu.addClass('menuBackground');
                }
                else  $menu.removeClass('menuBackground');
                $('.menuBlock').css('display', 'none');

            }
        }
    });



      $(window).scroll(function() {

          if (($(this).scrollTop() >= $headerHeight - $menuHeight )){

            $menu.addClass('menuBackground');
             $('.menuBlock').css('display','inline-block');

          }
          else{
              if(mobNav.hasClass('show')){
                  $menu.addClass('menuBackground');
              }
              else  $menu.removeClass('menuBackground');
              $('.menuBlock').css('display','none');

          }
      });



      var iconMobMenu =$('.iconMobMenu');

      function propag(event) {
          event.stopPropagation()
      }

      mobNav.on('click', propag);
      iconMobMenu.on('click', propag);

      iconMobMenu.on('click', function(e) {
          mobNav.toggleClass('show');
          iconMobMenu.toggleClass('cross');
          if(iconMobMenu.hasClass('cross')){
              $('.menu').addClass('menuBackground');
          }

          else {
              if ($(window).scrollTop()> $headerHeight ) {
                  $('.menu').addClass('menuBackground');
                  console.log('10');
              }
              else $('.menu').removeClass('menuBackground');

          }


          });


     $(document).on('click', function(){
         mobNav.removeClass('show');
         iconMobMenu.removeClass('cross');

         if ($(window).scrollTop()> $headerHeight) {
             $('.menu').addClass('menuBackground');
         }
         else $('.menu').removeClass('menuBackground');

      });

});
