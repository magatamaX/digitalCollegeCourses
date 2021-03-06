! function () {
    for (var a = document.querySelectorAll("a"), i = 0; i < a.length; i++) a[i].host !== location.host && (a[i].setAttribute("target", "_blank"), a[i].setAttribute("rel", "noopener noreferrer"))
  }(), $(function () {
    $("#toggle").click(function () {
      return $("#nav-menu").slideToggle(), !1
    }), $(window).resize(function () {
      480 < $(window).width() && $("#nav-menu").show()
    }), $(document).ready(function ($) {
      $("#thumb-h").sliderPro({
        width: 920,
        height: 630,
        buttons: !1,
        thumbnailWidth: 120,
        thumbnailHeight: 80,
        slideDistance: 0,
        breakpoints: {
          480: {
            thumbnailWidth: 120,
            thumbnailHeight: 80
          }
        }
      })
    }), $(".index__category-box-step1").hover(function () {
      $(".category__list li:nth-child(1) img").css({
        border: "3px solid #E9B226",
        "transition-duration": "0.3s"
      }), $(".category__content-image").attr("src", "/schoolnew/images/index/category_image/step1.png"), $("p.base-title").text("基礎講座 Step1"), $("p.damitext-base").text("カメラの基礎と写真の基礎の初歩の初歩を実践・体感しながら学びます。カメラの準備からボケのある写真を撮ってみたい方に。"), $(".category__list li:nth-child(n+2) img").css({
        border: "3px solid #DDD",
        "transition-duration": "0.3s"
      })
    }), $(".index__category-box-step2").hover(function () {
      $(".category__list li:nth-child(2) img").css({
        border: "3px solid #E9B226",
        "transition-duration": "0.3s"
      }), $(".category__content-image").attr("src", "/schoolnew/images/index/category_image/step2.png"), $("p.base-title").text("基礎講座 Step2"), $("p.damitext-base").text("カメラの設定画面にでてくるWB・ISOなどのカメラ設定を変更し、その実践・体感をしながら学びます。"), $(".category__list li:nth-child(1) img").removeClass("current"), $(".category__list li:nth-child(-n+1) img , .category__list li:nth-child(n+3) img").css({
        border: "3px solid #DDD",
        "transition-duration": "0.3s"
      })
    }), $(".index__category-box-step3").hover(function () {
      $(".category__list li:nth-child(3) img").css({
        border: "3px solid #E9B226",
        "transition-duration": "0.3s"
      }), $(".category__content-image").attr("src", "/schoolnew/images/index/category_image/step3.png"), $("p.base-title").text("基礎講座 Step3"), $("p.damitext-base").text("露出の3大要素「絞り」・「シャッタースピード」・「ISO感度」の関係やレンズ効果、一般的な構図について学びます。"), $(".category__list li:nth-child(1) img").removeClass("current"), $(".category__list li:nth-child(-n+2) img , .category__list li:nth-child(n+4) img").css({
        border: "3px solid #DDD",
        "transition-duration": "0.3s"
      })
    }), $(".index__category-box-step1-5").hover(function () {
      $(".category__list li:nth-child(4) img").css({
        border: "3px solid #E9B226",
        "transition-duration": "0.3s"
      }), $(".category__content-image").attr("src", "/schoolnew/images/index/category_image/step1-5.png"), $(".base-title").text("基礎講座 Step1.5"), $("p.damitext-base").text("カメラの専門用語を使わずに・ライブガイド・SCN・AP・ARTといった写真撮影を楽しむモードを使いながら学びます。カメラの基礎からいろいろなイメージの写真を撮ってみたい方に。"), $(".index__category-box-step1").removeClass("current"), $(".category__list li:nth-child(-n+3) img , .category__list li:nth-child(n+5) img").css({
        border: "3px solid #DDD",
        "transition-duration": "0.3s"
      })
    }), $(".index__category-box-step123").hover(function () {
      $(".category__list li:nth-child(5) img").css({
        border: "3px solid #E9B226",
        "transition-duration": "0.3s"
      }), $(".category__content-image").attr("src", "/schoolnew/images/index/category_image/step123.png"), $(".base-title").text("基礎講座 Step1・2・3"), $("p.damitext-base").text("Step1・2・3の3つの講座を1日で学びます。時間のない方や、短期集中でに学びたい方に。"), $(".index__category-box-step1").removeClass("current"), $(".category__list li:nth-child(-n+4) img , .category__list li:nth-child(n+6) img").css({
        border: "3px solid #DDD",
        "transition-duration": "0.3s"
      })
    }), $(".index__category-box-yukkuri").hover(function () {
      $(".category__list li:nth-child(6) img").css({
        border: "3px solid #E9B226",
        "transition-duration": "0.3s"
      }), $(".category__content-image").attr("src", "/schoolnew/images/index/category_image/step23.png"), $(".base-title").text("基礎講座 Step2・3"), $("p.damitext-base").text("Step2、Step3の2つの講座を少人数で3回に分けてゆっくりと学びます。設定や操作をじっくり確認しながらすすめたい方に。"), $(".index__category-box-step1").removeClass("current"), $(".category__list li:nth-child(-n+5) img , .category__list li:nth-child(n+7) img").css({
        border: "3px solid #DDD",
        "transition-duration": "0.3s"
      })
    }), $(".index__category-box-workspace").hover(function () {
      $(".category__list li:nth-child(7) img").css({
        border: "3px solid #E9B226",
        "transition-duration": "0.3s"
      }), $(".category__content-image").attr("src", "/schoolnew/images/index/category_image/digital.jpg"), $(".base-title").text("Olympus Workspace使い方講座"), $("p.damitext-base").text("「Olympus Workspace」の基本的な使い方、操作の仕方を講義形式で学びます。"), $(".index__category-box-step1").removeClass("current"), $(".category__list li:nth-child(-n+6) img , .category__list li:nth-child(n+8) img").css({
        border: "3px solid #DDD",
        "transition-duration": "0.3s"
      })
    }), $(".index__category-box-high").hover(function () {
      $(".category__list li:nth-child(8) img").css({
        border: "3px solid #E9B226",
        "transition-duration": "0.3s"
      }), $(".category__content-image").attr("src", "/schoolnew/images/index/category_image/high.jpg"), $("p.base-title").text("ハイエンド使いこなし"), $("p.damitext-base").text("多機能なハイエンド機の細かい設定や機能を機種を限定して学びます。「OM-D E-M1X」、「OM-D E-M1 Mark II」をお持ちの方、ご興味のある方に。"), $(".index__category-box-step1").removeClass("current"), $(".category__list li:nth-child(-n+7) img , .category__list li:nth-child(n+9) img").css({
        border: "3px solid #DDD",
        "transition-duration": "0.3s"
      })
    }), $(".index__category-box-art").hover(function () {
      $(".category__list-practice li:nth-child(1) img").css({
        border: "3px solid #E9B226",
        "transition-duration": "0.3s"
      }), $(".category__content-image-practice").attr("src", "/schoolnew/images/index/category_image/art.jpg"), $("p.practice-title").text("写真の表現を学ぶ《総合》"), $("p.damitext-practice").text("基礎講座の内容を踏まえて、写真表現の基本である「露出」「構図」「ボケ」等を体系的に学びます。写真家の先生に直接ご指導いただき、基礎的な知識を撮影の場で生きる技術へと実践していきます。"), $(".category__list-practice li:nth-child(n+2) img").css({
        border: "3px solid #DDD",
        "transition-duration": "0.3s"
      })
    }), $(".index__category-box-color").hover(function () {
      $(".category__list-practice li:nth-child(2) img").css({
        border: "3px solid #E9B226",
        "transition-duration": "0.3s"
      }), $(".category__content-image-practice").attr("src", "/schoolnew/images/index/category_image/color.jpg"), $("p.practice-title").text("写真の表現を学ぶ《カラー表現》"), $("p.damitext-practice").text("基礎講座の内容を踏まえて、写真表現の「色づくり」「仕上がり」「アートフィルター」「多重露出」「ライブコンポジット」「HDR」等を実践的に撮影の場を持ちながら、写真家講師ならではの指導を行います。"), $(".category__list-practice li:nth-child(1) img").removeClass("current"), $(".category__list-practice li:nth-child(-n+1) img ,.category__list-practice li:nth-child(n+3) img").css({
        border: "3px solid #DDD",
        "transition-duration": "0.3s"
      })
    }), $(".index__category-box-mono").hover(function () {
      $(".category__list-practice li:nth-child(3) img").css({
        border: "3px solid #E9B226",
        "transition-duration": "0.3s"
      }), $(".category__content-image-practice").attr("src", "/schoolnew/images/index/category_image/mono.jpg"), $(".practice-title").text("写真の表現を学ぶ《モノクロ》"), $("p.damitext-practice").text("基礎講座の内容を踏まえて、写真表現の「モノクロの基本」「コントラスト」「シャープ」「粒状感」「多重露出」等を実践的に撮影の場を持ちながら、写真家講師ならではの指導を行います。"), $(".category__list-practice li:nth-child(1) img").removeClass("current"), $(".category__list-practice li:nth-child(-n+2) img ,.category__list-practice li:nth-child(n+4) img").css({
        border: "3px solid #DDD",
        "transition-duration": "0.3s"
      })
    }), $(".index__category-box-light").hover(function () {
      $(".category__list-practice li:nth-child(4) img").css({
        border: "3px solid #E9B226",
        "transition-duration": "0.3s"
      }), $(".category__content-image-practice").attr("src", "/schoolnew/images/index/category_image/light.jpg"), $("h4 .practice-title").text("写真の表現を学ぶ《ライティング》"), $("p.damitext-practice").text("基礎講座の内容を踏まえて、写真表現の光について学びます。「定常光」「フラッシュ光」「光のコントロール」等を実践的に撮影の場を持ちながら、写真家講師ならではの指導を行います。"), $(".category__list-practice li:nth-child(1) img").removeClass("current"), $(".category__list-practice li:nth-child(-n+3) img ,.category__list-practice li:nth-child(n+5) img").css({
        border: "3px solid #DDD",
        "transition-duration": "0.3s"
      })
    }), $(".index__category-box-digital").hover(function () {
      $(".category__list-practice li:nth-child(5) img").css({
        border: "3px solid #E9B226",
        "transition-duration": "0.3s"
      }), $(".category__content-image-practice").attr("src", "/schoolnew/images/index/category_image/digital.jpg"), $("h4 .practice-title").text("写真の表現を学ぶ《デジタルワークフロー》"), $("p.damitext-practice").text("基礎講座を踏まえて「Olympus Workspace」を使ったRAW現像＆画像編集のワークフローを写真家講師から講義形式を中心に学びます。"), $(".category__list-practice li:nth-child(1) img").removeClass("current"), $(".category__list-practice li:nth-child(-n+4) img").css({
        border: "3px solid #DDD",
        "transition-duration": "0.3s"
      })
    }), $(".index__category-box-flower").hover(function () {
      $(".category__list-enjoy li:nth-child(1) img").css({
        border: "3px solid #E9B226",
        "transition-duration": "0.3s"
      }), $(".category__list-enjoy li:nth-child(n+2) img").css({
        border: "3px solid #DDD",
        "transition-duration": "0.3s"
      })
    }), $(".index__category-box-landscape").hover(function () {
      $(".category__list-enjoy li:nth-child(2) img").css({
        border: "3px solid #E9B226",
        "transition-duration": "0.3s"
      }), $(".category__list-enjoy li:nth-child(1) img").removeClass("current"), $(".category__list-enjoy li:nth-child(-n+1) img ,.category__list-enjoy li:nth-child(n+3) img").css({
        border: "3px solid #DDD",
        "transition-duration": "0.3s"
      })
    }), $(".index__category-box-snap").hover(function () {
      $(".category__list-enjoy li:nth-child(3) img").css({
        border: "3px solid #E9B226",
        "transition-duration": "0.3s"
      }), $(".category__list-enjoy li:nth-child(1) img").removeClass("current"), $(".category__list-enjoy li:nth-child(-n+2) img ,.category__list-enjoy li:nth-child(n+4) img").css({
        border: "3px solid #DDD",
        "transition-duration": "0.3s"
      })
    }), $(".index__category-box-wildbird").hover(function () {
      $(".category__list-enjoy li:nth-child(4) img").css({
        border: "3px solid #E9B226",
        "transition-duration": "0.3s"
      }), $(".category__list-enjoy li:nth-child(1) img").removeClass("current"), $(".category__list-enjoy li:nth-child(-n+3) img ,.category__list-enjoy li:nth-child(n+5) img").css({
        border: "3px solid #DDD",
        "transition-duration": "0.3s"
      })
    }), $(".index__category-box-human").hover(function () {
      $(".category__list-enjoy li:nth-child(5) img").css({
        border: "3px solid #E9B226",
        "transition-duration": "0.3s"
      }), $(".category__list-enjoy li:nth-child(1) img").removeClass("current"), $(".category__list-enjoy li:nth-child(-n+4) img ,.category__list-enjoy li:nth-child(n+6) img").css({
        border: "3px solid #DDD",
        "transition-duration": "0.3s"
      })
    }), $(".index__category-box-train").hover(function () {
      $(".category__list-enjoy li:nth-child(6) img").css({
        border: "3px solid #E9B226",
        "transition-duration": "0.3s"
      }), $(".category__list-enjoy li:nth-child(1) img").removeClass("current"), $(".category__list-enjoy li:nth-child(-n+5) img ,.category__list-enjoy li:nth-child(n+7) img").css({
        border: "3px solid #DDD",
        "transition-duration": "0.3s"
      })
    }), $(".index__category-box-airplane").hover(function () {
      $(".category__list-enjoy li:nth-child(7) img").css({
        border: "3px solid #E9B226",
        "transition-duration": "0.3s"
      }), $(".category__list-enjoy li:nth-child(1) img").removeClass("current"), $(".category__list-enjoy li:nth-child(-n+6) img ,.category__list-enjoy li:nth-child(n+8) img").css({
        border: "3px solid #DDD",
        "transition-duration": "0.3s"
      })
    }), $(".index__category-box-night").hover(function () {
      $(".category__list-enjoy li:nth-child(8) img").css({
        border: "3px solid #E9B226",
        "transition-duration": "0.3s"
      }), $(".category__list-enjoy li:nth-child(1) img").removeClass("current"), $(".category__list-enjoy li:nth-child(-n+7) img ,.category__list-enjoy li:nth-child(n+9) img").css({
        border: "3px solid #DDD",
        "transition-duration": "0.3s"
      })
    }), $(".index__category-box-marine").hover(function () {
      $(".category__list-enjoy li:nth-child(9) img").css({
        border: "3px solid #E9B226",
        "transition-duration": "0.3s"
      }), $(".category__list-enjoy li:nth-child(1) img").removeClass("current"), $(".category__list-enjoy li:nth-child(-n+8) img ,.category__list-enjoy li:nth-child(n+10) img").css({
        border: "3px solid #DDD",
        "transition-duration": "0.3s"
      })
    }), $(".index__category-box-woman2").hover(function () {
      $(".category__list-enjoy li:nth-child(10) img").css({
        border: "3px solid #E9B226",
        "transition-duration": "0.3s"
      }), $(".category__list-enjoy li:nth-child(1) img").removeClass("current"), $(".category__list-enjoy li:nth-child(-n+9) img ,.category__list-enjoy li:nth-child(n+11) img").css({
        border: "3px solid #DDD",
        "transition-duration": "0.3s"
      })
    }), $(".index__category-box-other").hover(function () {
      $(".category__list-enjoy li:nth-child(11) img").css({
        border: "3px solid #E9B226",
        "transition-duration": "0.3s"
      }), $(".category__list-enjoy li:nth-child(1) img").removeClass("current"), $(".category__list-enjoy li:nth-child(-n+10) img").css({
        border: "3px solid #DDD",
        "transition-duration": "0.3s"
      })
    })
  }), $(function () {
    var resizeTimer, $window = $(window),
      $collegeMenu = $(".college-menu"),
      $burgerMenuSp = $(".burgerMenu-sp"),
      $burgerMenuPc = $(".burgerMenu-pc"),
      $navSecondaryClose = $(".college-menu-nav-secondary-close"),
      $win = $(window),
      windowWidth = window.innerWidth;
    $win.on("resize", function (event) {
      clearTimeout(resizeTimer), resizeTimer = setTimeout(function () {
        windowWidth = window.innerWidth, $collegeMenu.removeClass("college-nav-primary-open"), $collegeMenu.removeClass("college-nav-secondary-open"), $("#college-nav-secondary-section").css("display", "none"), $window.disablescroll("undo"), $("html").removeClass("college-menu-open"), 790 <= windowWidth ? ($("#college-nav-primary-section").css("display", "block"), $("#college-nav-secondary-section").css("display", "none")) : $("#college-nav-primary-section").css("display", "none")
      }, 250)
    }), $burgerMenuSp.on("click", function (e) {
      e.preventDefault(), $("#college-nav-primary-section").stop().slideToggle("fast", "linear"), $collegeMenu.toggleClass("college-nav-primary-open"), $("html").toggleClass("college-menu-open")
    }), $burgerMenuPc.on("click", function (e) {
      e.preventDefault(), $("#college-nav-secondary-section").stop().slideToggle("fast", "linear"), $collegeMenu.toggleClass("college-nav-secondary-open")
    }), $navSecondaryClose.on("click", function (event) {
      $("#college-nav-secondary-section").stop().slideToggle("fast", "linear"), $collegeMenu.toggleClass("college-menu-open"), 790 <= windowWidth && $window.disablescroll("undo")
    }), $("#college-nav-secondary-section").on("click", function (event) {
      "college-nav-secondary-section" === $(event.target).attr("id") && ($("#college-nav-secondary-section").stop().slideUp("fast", "linear"), $collegeMenu.toggleClass("college-menu-open"))
    }), $("#college-nav-primary-section").on("click", function (event) {
      790 <= windowWidth || "college-nav-primary-section" === $(event.target).attr("id") && ($("#college-nav-primary-section").stop().slideUp("fast", "linear"), $collegeMenu.toggleClass("college-nav-primary-open"), $("#college-nav-secondary-section").stop().slideUp("fast", "linear"), $collegeMenu.toggleClass("college-nav-secondary-open"), $("html").removeClass("college-menu-open"))
    })
  }), $(document).ready(function () {
    var pagetop = $(".scroll-top");
    $(window).scroll(function () {
      100 < $(this).scrollTop() ? pagetop.fadeIn() : pagetop.fadeOut()
    }), pagetop.click(function () {
      return $("body, html").animate({
        scrollTop: 0
      }, 500), !1
    })
  });
  var _window = $(window),
    _header = $(".college-menu");
  _window.on("scroll", function () {
    heroBottom = $("#fotopus-nav").height(), _window.scrollTop() > heroBottom ? _header.addClass("fixed") : _header.removeClass("fixed")
  }), _window.trigger("scroll");
  var heroBottom;
  _window = $(window), _header = $(".college-menu");
  _window.on("scroll", function () {
    heroBottom = $("#fotopus-nav").height(), _window.scrollTop() > heroBottom ? _header.addClass("fixed") : _header.removeClass("fixed")
  }), 
  $(function () {
    var fixedBtnLink = $(".base__content-select-btn-base-fixed a"),
      fixedBtn = $(".base__content-select-btn-base-fixed"),
      baseBtn = $(".base__content-select-btn-base a");
    $(".base__content-select-card-base").click(function (e) {
        alert('check');
    //   baseBtn.add(fixedBtnLink).css({
    //     'background': '#07117B',
    //     "transition-duration": "0.2s"
    //   })
    });
    var ua = navigator.userAgent;
    (0 < ua.indexOf("iPhone") || 0 < ua.indexOf("Android")) && 0 < ua.indexOf("Mobile") ? $(window).scroll(function () {
      $(this).scrollTop() < 700 || 1250 < $(this).scrollTop() ? fixedBtn.slideUp("fast") : fixedBtn.slideDown("fast")
    }) : (0 < ua.indexOf("iPad") || ua.indexOf("Android"), fixedBtn.css("display", "none"));
    var baseA = $("#base__select-a"),
      baseB = $("#base__select-b"),
      baseC = $("#base__select-c");
    baseA.focusin(function () {
      $(this).css({
        border: "1px solid #0066ff",
        "box-shadow": "0 0 1px #0066ff",
        background: "#E6ECF4"
      }), $("#base__select-b,#base__select-c").css({
        border: "1px solid #333",
        background: "#fff"
      })
    }), baseB.focusin(function () {
      $(this).css({
        border: "1px solid #0066ff",
        "box-shadow": "0 0 1px #0066ff",
        background: "#E6ECF4"
      }), $("#base__select-a,#base__select-c").css({
        border: "1px solid #333",
        background: "#fff"
      })
    }), baseC.focusin(function () {
      $(this).css({
        border: "1px solid #0066ff",
        "box-shadow": "0 0 1px #0066ff",
        background: "#E6ECF4"
      }), $("#base__select-a,#base__select-b").css({
        border: "1px solid #333",
        background: "#fff"
      })
    }), baseA.add(baseB).add(baseC).hover(function () {
      $(this).css({
        opacity: "0.6",
        "transition-duration": "0.2s"
      })
    }, function () {
      $(this).css({
        opacity: "1",
        "transition-duration": "0.2s"
      })
    })
  }), $(function () {
    $(".acordion_btn").click(function () {
      var index = $(".acordion_btn").index(this);
      $(".acordion").eq(index).slideToggle(), $(this).hasClass("opened") ? $(this).removeClass("opened").text("もっと見る") : $(this).addClass("opened").text("閉じる")
    }), $(".footer__btn__index").click(function () {
      $(".contact").toggleClass("displayNone")
    })
  });
