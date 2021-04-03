<?php
/*
Template Name: Home
*/
get_header(); ?>

<main>
  <section id="banner">
    <div class="key-logo g">
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" width="46.7px" height="49.7px" viewBox="0 0 46.7 49.7" xml:space="preserve">

        <path class="g-path" d="M46.7 43c-2.6 2.2-5.5 3.9-8.8 5 -3.3 1.1-6.8 1.7-10.4 1.7 -3.5 0-7-0.6-10.3-1.7 -3.3-1.1-6.2-2.7-8.8-4.9 -2.6-2.1-4.6-4.8-6.1-7.8C0.8 32.2 0 28.7 0 24.7c0-4 0.8-7.5 2.3-10.5C3.9 11.1 6 8.5 8.6 6.4c2.6-2.1 5.5-3.7 8.8-4.8C20.7 0.5 24.1 0 27.6 0c3.4 0 6.8 0.5 10 1.5 3.2 1 6.2 2.4 8.7 4.4l-6.2 7.2c-1.7-1.2-3.7-2.1-5.9-2.8 -2.2-0.6-4.4-0.9-6.6-0.9 -2.3 0-4.5 0.3-6.6 0.9 -2.1 0.6-4 1.6-5.7 2.8 -1.7 1.3-3 2.9-4 4.8 -1 2-1.5 4.3-1.5 6.9s0.5 4.9 1.5 6.9c1 1.9 2.4 3.5 4.1 4.8 1.7 1.3 3.6 2.2 5.7 2.8 4.5 1.3 14.5 1.3 16.4-3.6h9.2V43zM27.9 28.9l-8-7.3h16.9c5.5 0 9.9 4.4 9.9 9.9v0H34.6C32.1 31.5 29.7 30.5 27.9 28.9z" />
      </svg>
    </div>
    <div class="slide-home">
      <?php $args = array(
        'post_type' => 'banner',
        'post_status' => 'publish',
      );

      $loop = new WP_Query($args);

      while ($loop->have_posts()) : $loop->the_post();
      ?>
        <div class="item" style="background-image: url('<?php the_field('imagem_de_fundo'); ?>');">
          <div class="container h-100">
            <div class="row h-100 align-items-sm-start align-items-md-center">
              <div class="col-md-8 col-lg-8">
                <div class="card">
                  <?php the_field('titulo_texto'); ?>
                </div>
              </div>
            </div>
          </div>
        </div>
      <?php endwhile;

      wp_reset_postdata(); ?>
    </div>
  </section>

  <section id="quem-somos">
    <div class="key-logo r">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" width="39.4px" height="38.6px" viewBox="0 0 39.4 38.6" xml:space="preserve">

        <path class="r-path" d="M19.7 17h3.4c3.7 0 6.1-0.7 6.1-4.8 0-3.8-3-4.5-6.1-4.5H7.6v0c0 3.5-1.8 6.8-4.9 8.6 -1 0.6-1.9 1.2-2.7 2.1V0h24.5c1.8 0 3.5 0.3 5.1 0.9 1.6 0.6 2.9 1.4 4 2.4 1.1 1.1 1.9 2.4 2.6 3.9 0.6 1.5 0.9 3.2 0.9 5 0 3.9-1.2 6.9-3.7 9.1 -1.3 1.2-3 2.1-4.8 2.6l1.8 3c0.4 0.8 0.9 1.4 1.5 1.9 0.5 0.5 1.1 0.8 1.7 1 0.6 0.2 1.2 0.4 1.7 0.4 0.6 0.1 1.1 0.1 1.5 0.1h2.7v8.2h-3.4c-1 0-2 0-3-0.1 -0.9-0.1-1.9-0.4-2.8-0.7 -0.9-0.4-1.9-1-2.8-1.8 -0.9-0.8-1.8-1.9-2.7-3.4L20 24.6h-0.3c-3.3 0-5.7 0-8.3 0.7 -2.2 0.6-3.8 2.7-3.8 5v8.2H0l0-10.7c0-3.3 1.7-6.4 4.5-8C8.2 17.8 12.7 17 19.7 17L19.7 17z" />
      </svg>
    </div>

    <div class="container">
      <div class="row justify-content-between">
        <div class="col-md-5">
          <div class="imagem-sobre mb-5">
            <img src="<?php the_field('sobre_imagem'); ?>" class="img-fluid" alt="">
          </div>
        </div>
        <div class="col-md-6">
          <span><?php the_field('sobre_subtitulo'); ?></span>
          <h2><?php the_field('sobre_frase_principal'); ?></h2>
          <?php the_field('sobre_texto_de_apoio'); ?>
        </div>
      </div>
    </div>
  </section>

  <section id="servicos" class="bg-gray">
    <div class="key-logo e1">
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" width="31.8px" height="38.6px" viewBox="0 0 31.8 38.6" xml:space="preserve">

        <path class="e1-path" d="M7.6 30.8h24.2v7.7H6c-3.3 0-6-2.7-6-6l0-7.1c0-3.3 1.8-6.4 4.8-7.9 3.9-2 8.1-2.7 14.8-2.7h5.6v7.7h-5.6c-1.8 0-3.3 0-4.4 0.1 -1.2 0.1-2.2 0.2-3 0.3 -0.8 0.1-1.6 0.4-2.3 0.7 0 0 0 0 0 0 -1.4 0.6-2.3 2-2.3 3.5V30.8zM0 7.7V0h30.4v0c0 4.2-3.4 7.7-7.7 7.7H7.6 0z" />
      </svg>
    </div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8 text-center mb-5">
          <h2>Como a Green Solutions <br>pode te ajudar</h2>
        </div>
      </div>
      <div class="row justify-content-between">
        <div class="col-md-4 text-center">
          <h3>Mudanças climáticas</h3>
          <div class="inner-servicos">
            <div class="row m-0 justify-content-center">
              <?php $args = array(
                'post_type' => 'mudanca-climatica',
                'post_status' => 'publish',
              );

              $loop = new WP_Query($args);

              while ($loop->have_posts()) : $loop->the_post();
              ?>
                <div class="col-md-6 mb-3">
                  <div class="card justify-content-center align-items-center text-center h-100">
                    <h3><?php the_title(); ?></h3>
                  </div>
                </div>

              <?php endwhile;

              wp_reset_postdata(); ?>
            </div>
          </div>
        </div>
        <div class="col-md-2 text-center mb-5">
          <img id="imagem-color" src="<?php echo get_bloginfo('template_directory'); ?>/assets/img/e.svg" alt="" class="img-fluid">
          <a href="#contato" class="btn btn-primary mt-4 w-100"><span>Solicitar consultoria</span></a>
        </div>
        <div class="col-md-4 text-center">
          <h3>Estudos e licenciamentos ambientais</h3>
          <div class="inner-servicos">
            <div class="row m-0 justify-content-center">
              <?php $args = array(
                'post_type' => 'estudos',
                'post_status' => 'publish',
              );

              $loop = new WP_Query($args);

              while ($loop->have_posts()) : $loop->the_post();
              ?>
                <div class="col-md-6 mb-3">
                  <div class="card justify-content-center align-items-center text-center h-100">
                    <h3><?php the_title(); ?></h3>
                  </div>
                </div>

              <?php endwhile;

              wp_reset_postdata(); ?>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="cta">
    <div class="container">
      <div class="row">
        <div class="col-md-12 text-center">
          <h2><?php the_field('cta_titulo') ?></h2>
          <p><?php the_field('cta_texto') ?></p>
          <a href="#contato" class="btn btn-primary mt-4"><span>Solicitar consultoria</span></a>
        </div>
      </div>
    </div>
  </section>

  <section id="projetos">
    <div class="container">
      <div class="row">
        <div class="col-md-6 mb-5">
          <img src="<?php echo get_bloginfo('template_directory'); ?>/assets/img/n.svg" class="img-fluid" alt="">
        </div>
        <div class="col-md-6">
          <h2><?php the_field('projetos_titulo') ?></h2>
          <?php the_field('projetos_texto'); ?>
        </div>
      </div>
    </div>
  </section>

  <section id="contato">
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-md-4 mb-5">
          <h2>Contato</h2>
          <?php echo do_shortcode('[contact-form-7 id="7" title="Contato"]'); ?>
        </div>
        <div class="col-md-6">
          <div class="mapa">
            <?php the_field('iframe_mapa'); ?>
          </div>
          <?php the_field('contato'); ?>
        </div>
      </div>
    </div>
  </section>

</main>

<?php get_footer(); ?>
<script>
  $("input[type='text'],input[type='email'],input[type='tel'], textarea").click(function() {
    $(this).closest('.form-group').addClass('valid')
  })
  $("input[type='text'],input[type='email'],input[type='tel'], textarea").mouseout(function() {
    if ($(this).val() == '') {
      $(this).closest('.form-group').removeClass('valid')
    }
  })
</script>