<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><?php echo $title = 'Green Solutions' . wp_title(' | ', false) ?></title>
  <meta name="description" content="<?php echo get_bloginfo('description'); ?>">

  <link rel="stylesheet" href="<?php echo get_bloginfo('template_directory'); ?>/assets/css/bootstrap.min.css">
  <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css" />
  <link rel="stylesheet" href="<?php echo get_bloginfo('template_directory'); ?>/assets/css/styles.css">
  <?php wp_head(); ?>
</head>

<body>
  <header class="pt-3 pb-3">
    <div class="container">
      <div class="row justify-content-between align-items-center">
        <div class="col-md-2 col-sm-4 col-6">
          <div class="logo">
            <a href="<?php echo home_url(); ?>"><img src="<?php echo get_theme_mod('header_logo'); ?>" class="img-fluid" alt="Rba Elevadores"></a>
          </div>
        </div>
        <div class="col-md-4 col-4 menu-mobile">
          <div id="b1" class="box">
            <svg id="i1" class="icon" viewBox="0 0 100 100">
              <path id="top-line-1" d="M30,37 L70,37 Z"></path>
              <path id="middle-line-1" d="M30,50 L70,50 Z"></path>
              <path id="bottom-line-1" d="M30,63 L70,63 Z"></path>
            </svg>
          </div>
        </div>

        <div class="col-md-10  menu-desktop">
          <nav class="navbar justify-content-end">
            <?php wp_nav_menu(array(
              'theme_location' => 'primary_menu',
              'add_li_class'  => 'nav-link'
            )); ?>
          </nav>
        </div>
      </div>
    </div>

    <div class="menu-mobile-content">
      <nav class="navbar justify-content-center align-items-center">
        <?php wp_nav_menu(array(
          'theme_location' => 'primary_menu',
          'add_li_class'  => 'nav-link'
        )); ?>
      </nav>
    </div>
  </header>