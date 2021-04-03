<?php
// ADICIONAR MENUS
if (!function_exists('menu_principal')) {

    function menu_principal()
    {
        register_nav_menus(array(
            'primary_menu' => __('Menu principal', 'text_domain'),
        ));
    }
    add_action('after_setup_theme', 'menu_principal', 0);
}

function add_additional_class_on_li($classes, $item, $args)
{
    if (isset($args->add_li_class)) {
        $classes[] = $args->add_li_class;
    }
    return $classes;
}
add_filter('nav_menu_css_class', 'add_additional_class_on_li', 1, 3);

// ADICIONAR LOGO
function header_logo_theme($wp_customize)
{
    // add a setting 
    $wp_customize->add_setting('header_logo');
    // Add a control to upload the hover logo
    $wp_customize->add_control(new WP_Customize_Image_Control($wp_customize, 'header_logo', array(
        'label' => 'Logo menu Superior',
        'section' => 'title_tagline', //this is the section where the custom-logo from WordPress is
        'settings' => 'header_logo',
        'priority' => 8 // show it just below the custom-logo
    )));
}

add_action('customize_register', 'header_logo_theme');

// Banner Home
function add_banner()
{
    $labels = array(
        'name'                => __('Banners'),
        'singular_name'       => __('Banner'),
        'menu_name'           => __('Banners'),
        'parent_item_colon'   => __('Banner pai'),
        'all_items'           => __('Todos Banners'),
        'view_item'           => __('Ver Banner'),
        'add_new_item'        => __('Adicionar novo Banner'),
        'add_new'             => __('Adicionar novo'),
        'edit_item'           => __('Editar Banner'),
        'update_item'         => __('Atualizar Banner'),
        'search_items'        => __('Procurar Banner'),
        'not_found'           => __('Não encontrado'),
        'not_found_in_trash'  => __('Não encontrado na lixeira')
    );
    $args = array(
        'label'               => __('banner'),
        'labels'              => $labels,
        'supports'            => array('title', 'thumbnail', 'revisions'),
        'public'              => true,
        'hierarchical'        => false,
        'show_ui'             => true,
        'show_in_menu'        => true,
        'show_in_nav_menus'   => true,
        'show_in_admin_bar'   => true,
        'has_archive'         => true,
        'menu_icon'           => 'dashicons-slides',
        'can_export'          => true,
        'exclude_from_search' => false,
        'yarpp_support'       => true,
        'taxonomies'           => array('post_tag'),
        'publicly_queryable'  => true,
        'capability_type'     => 'page'
    );
    register_post_type('banner', $args);
}
add_action('init', 'add_banner', 0);

// Mudanças Climáticas
function add_mudancas_climaticas()
{
    $labels = array(
        'name'                => __('Serviço Mudança Climática'),
        'singular_name'       => __('Serviço Mudança Climática'),
        'menu_name'           => __('Serviço Mudança Climática'),
        'all_items'           => __('Todos os Serviços de Mudança Climática'),
        'add_new_item'        => __('Adicionar novo Serviços de Mudança Climática'),
        'add_new'             => __('Adicionar novo'),
        'edit_item'           => __('Editar'),
        'update_item'         => __('Atualizar'),
        'search_items'        => __('Procurar'),
        'not_found'           => __('Não encontrado'),
        'not_found_in_trash'  => __('Não encontrado na lixeira')
    );
    $args = array(
        'label'               => __('mudanca-climatica'),
        'labels'              => $labels,
        'supports'            => array('title'),
        'public'              => true,
        'hierarchical'        => false,
        'show_ui'             => true,
        'show_in_menu'        => true,
        'show_in_nav_menus'   => true,
        'show_in_admin_bar'   => true,
        'menu_icon'           => 'dashicons-palmtree',
        'exclude_from_search' => true,
        'capability_type'     => 'page'
    );
    register_post_type('mudanca-climatica', $args);
}
add_action('init', 'add_mudancas_climaticas', 0);

// ESTUDOS

function add_estudos()
{
    $labels = array(
        'name'                => __('Estudos'),
        'singular_name'       => __('Estudos'),
        'menu_name'           => __('Estudos'),
        'all_items'           => __('Todos os Estudos'),
        'add_new_item'        => __('Adicionar novo Estudos'),
        'add_new'             => __('Adicionar novo'),
        'edit_item'           => __('Editar'),
        'update_item'         => __('Atualizar'),
        'search_items'        => __('Procurar'),
        'not_found'           => __('Não encontrado'),
        'not_found_in_trash'  => __('Não encontrado na lixeira')
    );
    $args = array(
        'label'               => __('estudos'),
        'labels'              => $labels,
        'supports'            => array('title'),
        'public'              => true,
        'hierarchical'        => false,
        'show_ui'             => true,
        'show_in_menu'        => true,
        'show_in_nav_menus'   => true,
        'show_in_admin_bar'   => true,
        'menu_icon'           => 'dashicons-index-card',
        'exclude_from_search' => true,
        'capability_type'     => 'page'
    );
    register_post_type('estudos', $args);
}
add_action('init', 'add_estudos', 0);