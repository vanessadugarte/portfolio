const instagramAsset = (filename) => new URL(`../assets/images/projects/graphic-design/instagram posts/web/${filename}`, import.meta.url).href

const brands = [
  {
    "id": "ventti",
    "posts": [
      {
        "id": "holiday",
        "image": "ventti-holiday.webp",
        "width": 600,
        "height": 600
      },
      {
        "id": "shop",
        "image": "ventti-shop.webp",
        "width": 600,
        "height": 600
      },
      {
        "id": "boots",
        "image": "ventti-boots.webp",
        "width": 600,
        "height": 600
      },
      {
        "id": "installments",
        "image": "ventti-installments.webp",
        "width": 600,
        "height": 600
      },
      {
        "id": "promotion",
        "image": "ventti-promotion.webp",
        "width": 600,
        "height": 600
      },
      {
        "id": "fringe",
        "image": "ventti-fringe.webp",
        "width": 600,
        "height": 600,
        "video": "ventti-fringe.mp4"
      }
    ]
  },
  {
    "id": "diva-approved",
    "posts": [
      {
        "id": "sale-1",
        "image": "diva-approved-sale-1.webp",
        "width": 640,
        "height": 640
      },
      {
        "id": "sale-2",
        "image": "diva-approved-sale-2.webp",
        "width": 600,
        "height": 600
      },
      {
        "id": "sale-3",
        "image": "diva-approved-sale-3.webp",
        "width": 600,
        "height": 600
      },
      {
        "id": "sale-4",
        "image": "diva-approved-sale-4.webp",
        "width": 600,
        "height": 600
      }
    ]
  },
  {
    "id": "urban-burgess",
    "posts": [
      {
        "id": "burger-problems",
        "image": "urban-burgess-burger-problems.webp",
        "width": 600,
        "height": 600
      },
      {
        "id": "football",
        "image": "urban-burgess-football.webp",
        "width": 600,
        "height": 600
      },
      {
        "id": "beers",
        "image": "urban-burgess-beers.webp",
        "width": 600,
        "height": 600
      },
      {
        "id": "menu",
        "image": "urban-burgess-menu.webp",
        "width": 600,
        "height": 600
      },
      {
        "id": "red-carpet",
        "image": "urban-burgess-red-carpet.webp",
        "width": 600,
        "height": 600
      },
      {
        "id": "opening",
        "image": "urban-burgess-opening.webp",
        "width": 600,
        "height": 600
      },
      {
        "id": "ufo",
        "image": "urban-burgess-ufo.webp",
        "width": 600,
        "height": 600,
        "video": "urban-burgess-ufo.mp4"
      },
      {
        "id": "disco",
        "image": "urban-burgess-disco.webp",
        "width": 600,
        "height": 600,
        "video": "urban-burgess-disco.mp4"
      }
    ]
  },
  {
    "id": "laura-constanza",
    "posts": [
      {
        "id": "eva",
        "image": "laura-constanza-eva.webp",
        "width": 540,
        "height": 540
      },
      {
        "id": "isadora",
        "image": "laura-constanza-isadora.webp",
        "width": 540,
        "height": 540
      },
      {
        "id": "monochrome",
        "image": "laura-constanza-monochrome.webp",
        "width": 540,
        "height": 540
      },
      {
        "id": "perfect-pair",
        "image": "laura-constanza-perfect-pair.webp",
        "width": 540,
        "height": 540
      },
      {
        "id": "kathy",
        "image": "laura-constanza-kathy.webp",
        "width": 540,
        "height": 540
      },
      {
        "id": "burgundy",
        "image": "laura-constanza-burgundy.webp",
        "width": 540,
        "height": 540
      }
    ]
  }
]

export const instagramPostsAssets = {
  layout: 'instagram-posts',
  brands: brands.map((brand) => ({
    ...brand,
    posts: brand.posts.map((post) => ({
      ...post,
      image: instagramAsset(post.image),
      ...(post.video ? { video: instagramAsset(post.video) } : {}),
    })),
  })),
}

export const instagramPostsContent = {
  "es": {
    "type": "Diseño gráfico",
    "title": "Diseño para Instagram",
    "description": "Publicaciones y animaciones para Ventti, Diva Approved, Urban Burgess y Laura Constanza.",
    "previewAlt": "Selección de publicaciones de moda, accesorios y gastronomía para Instagram.",
    "detail": {
      "introduction": "Una colección de publicaciones y animaciones creadas para Instagram. Cada marca tiene su propio lenguaje visual: desde composiciones de producto y propuestas de estilo hasta promociones y montajes con un toque de humor.",
      "facts": [
        {
          "label": "Año",
          "value": "2015–2016"
        },
        {
          "label": "Software",
          "value": "Photoshop"
        },
        {
          "label": "Formato",
          "value": "Instagram posts y GIFs"
        }
      ],
      "animationLabel": "Animación sin audio",
      "brands": {
        "ventti": {
          "title": "Ventti",
          "description": "Publicaciones de calzado y promociones, con composiciones sobre fondos blancos y acentos de color.",
          "posts": {
            "holiday": {
              "alt": "Botas negras junto al anuncio «Feriados open» de Ventti y la dirección Av. Santa Fe 2888."
            },
            "shop": {
              "alt": "Botín burdeos y un computador con la tienda de Ventti, acompañados de www.ventti.com.ar."
            },
            "boots": {
              "alt": "Botas negras junto a un teléfono que muestra el perfil de Instagram de Ventti."
            },
            "installments": {
              "alt": "Piernas con jeans y botines negros sobre fondo blanco; promoción Ahora 12 de jueves a sábado."
            },
            "promotion": {
              "alt": "Composición de jeans y botines negros con la promoción Ahora 12, de jueves a sábados, de Ventti."
            },
            "fringe": {
              "title": "Botines con flecos",
              "alt": "El mismo botín con flecos cambia entre tonos camel, negro y azul bajo el logotipo de Ventti."
            }
          }
        },
        "diva-approved": {
          "title": "Diva Approved",
          "description": "Piezas promocionales de joyería y accesorios que combinan fotografía, tipografía de gran tamaño y acentos turquesa.",
          "posts": {
            "sale-1": {
              "alt": "Modelo con gafas y joyería dentro de un marco turquesa; anuncio de 50 % de descuento en joyería y accesorios, código 50-OFF y envíos internacionales."
            },
            "sale-2": {
              "alt": "Modelo con gafas a la izquierda y anuncio Sale en turquesa: envíos internacionales, envío gratuito en Reino Unido para compras superiores a 55 libras y código DIVA07 con 10 % de descuento del 27 al 31 de julio."
            },
            "sale-3": {
              "alt": "Primer plano de una modelo aplicándose labial, con marco blanco y título Sale; envíos internacionales, envío gratuito en Reino Unido sobre 55 libras y código DIVA07 con 10 % de descuento del 27 al 31 de julio."
            },
            "sale-4": {
              "alt": "Modelo con collar rojo junto a un marco negro y título Sale en turquesa; envíos internacionales, envío gratuito en Reino Unido sobre 55 libras y código DIVA07 con 10 % de descuento del 27 al 31 de julio."
            }
          }
        },
        "urban-burgess": {
          "title": "Urban Burgess",
          "description": "Composiciones para una hamburguesería: producto, promociones y referencias a la cultura pop, con una identidad oscura y un tono lúdico.",
          "posts": {
            "burger-problems": {
              "alt": "Dos personas intentan morder una hamburguesa gigante bajo el logotipo de Urban Burgess; texto #BURGERPROBLEMS."
            },
            "football": {
              "alt": "Montaje de un futbolista en la cancha con una hamburguesa en lugar de la pelota, enmarcado con la marca Urban Burgess."
            },
            "beers": {
              "alt": "Dos vasos de cerveza sobre fondo de madera junto al anuncio Friday Beers de Urban Burgess."
            },
            "menu": {
              "alt": "Hamburguesa, cerveza y papas fritas sobre una mesa de madera; texto Burger + Beer + Fries."
            },
            "red-carpet": {
              "alt": "Hamburguesa sobre una alfombra roja rodeada de cordones dorados y luces de estreno, con la marca Urban Burgess."
            },
            "opening": {
              "alt": "Invitación a la apertura de Urban Burgess Burgers & Cocktails Bar: viernes 3 de junio, de 20:30 a 23:00, Gurruchaga 1417, Palermo; confirmación hasta el 2 de junio."
            },
            "ufo": {
              "title": "Abducción de una hamburguesa",
              "alt": "Un platillo volador ilumina una hamburguesa en un paisaje nocturno; la hamburguesa asciende y desaparece dentro de la nave."
            },
            "disco": {
              "title": "Hamburguesas en la pista",
              "alt": "Hamburguesas giran y se desplazan sobre una escena de baile disco, enmarcada por el logotipo de Urban Burgess."
            }
          }
        },
        "laura-constanza": {
          "title": "Laura Constanza",
          "description": "Publicaciones de calzado y propuestas de estilo: fichas de producto, combinaciones de prendas y promociones de la marca.",
          "posts": {
            "eva": {
              "alt": "Botines Eva en negro con detalle animal print y burdeos, sobre fondo blanco con el nombre Laura Constanza."
            },
            "isadora": {
              "alt": "Botín negro Isadora con hebillas y lápices de colores alrededor del tobillo, sobre fondo blanco."
            },
            "monochrome": {
              "alt": "Collage #LAURATIP con camiseta de rayas, abrigo negro, gafas, cámara, bolso y botas negras."
            },
            "perfect-pair": {
              "alt": "Modelo con botas negras y el texto Get the perfect pair; promoción Ahora 12 y dirección Pumacahua 209."
            },
            "kathy": {
              "alt": "Botines Kathy en negro y camel rodeados de trazos decorativos, sobre fondo blanco."
            },
            "burgundy": {
              "alt": "Collage #LAURATIP con vestido y botas burdeos, chaqueta y cartera camel, reloj y accesorios."
            }
          }
        }
      }
    }
  },
  "en": {
    "type": "Graphic design",
    "title": "Design for Instagram",
    "description": "Posts and animations for Ventti, Diva Approved, Urban Burgess and Laura Constanza.",
    "previewAlt": "A selection of fashion, accessory and food posts for Instagram.",
    "detail": {
      "introduction": "A collection of posts and animations created for Instagram. Each brand has its own visual language, from product compositions and styling ideas to promotions and playful photo montages.",
      "facts": [
        {
          "label": "Year",
          "value": "2015–2016"
        },
        {
          "label": "Software",
          "value": "Photoshop"
        },
        {
          "label": "Format",
          "value": "Instagram posts and GIFs"
        }
      ],
      "animationLabel": "Silent animation",
      "brands": {
        "ventti": {
          "title": "Ventti",
          "description": "Footwear posts and promotions, using white backgrounds and accents of color.",
          "posts": {
            "holiday": {
              "alt": "Black boots beside a Ventti holiday opening announcement and the address Av. Santa Fe 2888."
            },
            "shop": {
              "alt": "A burgundy ankle boot and a computer displaying the Ventti store, with www.ventti.com.ar."
            },
            "boots": {
              "alt": "Black boots beside a phone displaying the Ventti Instagram profile."
            },
            "installments": {
              "alt": "Legs in jeans and black ankle boots on white; an Ahora 12 installment promotion valid Thursday through Saturday."
            },
            "promotion": {
              "alt": "Jeans and black ankle boots with Ventti’s Ahora 12 installment promotion, Thursday through Saturday."
            },
            "fringe": {
              "title": "Fringed ankle boots",
              "alt": "The same fringed ankle boot changes between tan, black and blue below the Ventti logo."
            }
          }
        },
        "diva-approved": {
          "title": "Diva Approved",
          "description": "Jewelry and accessory promotions combining photography, large typography and turquoise accents.",
          "posts": {
            "sale-1": {
              "alt": "A model wearing sunglasses and jewelry inside a turquoise frame; 50% off all jewelry and accessories, code 50-OFF and worldwide shipping."
            },
            "sale-2": {
              "alt": "A model wearing sunglasses beside a turquoise Sale headline: worldwide shipping, free UK shipping on orders over £55 and code DIVA07 for 10% off from July 27 to 31."
            },
            "sale-3": {
              "alt": "Close-up of a model applying lipstick inside a white frame with a Sale headline; worldwide shipping, free UK shipping over £55 and code DIVA07 for 10% off from July 27 to 31."
            },
            "sale-4": {
              "alt": "A model wearing a red necklace beside a black frame and turquoise Sale headline; worldwide shipping, free UK shipping over £55 and code DIVA07 for 10% off from July 27 to 31."
            }
          }
        },
        "urban-burgess": {
          "title": "Urban Burgess",
          "description": "Burger restaurant posts mixing products, promotions and pop culture references, with a dark visual identity and a playful tone.",
          "posts": {
            "burger-problems": {
              "alt": "Two people trying to bite a giant burger below the Urban Burgess logo and the hashtag #BURGERPROBLEMS."
            },
            "football": {
              "alt": "A football player on the pitch with a burger replacing the ball, framed with Urban Burgess branding."
            },
            "beers": {
              "alt": "Two glasses of beer against a wooden background beside an Urban Burgess Friday Beers announcement."
            },
            "menu": {
              "alt": "A burger, beer and fries on a wooden table with the headline Burger + Beer + Fries."
            },
            "red-carpet": {
              "alt": "A burger on a red carpet with golden ropes and premiere lights, featuring Urban Burgess branding."
            },
            "opening": {
              "alt": "Urban Burgess Burgers & Cocktails Bar opening invitation: Friday June 3, 8:30–11 pm, Gurruchaga 1417, Palermo; RSVP by June 2."
            },
            "ufo": {
              "title": "Burger abduction",
              "alt": "A flying saucer lights up a burger in a nighttime landscape; the burger rises and disappears into the spacecraft."
            },
            "disco": {
              "title": "Burgers on the dance floor",
              "alt": "Burgers spin and move across a disco dance scene, framed by the Urban Burgess logo."
            }
          }
        },
        "laura-constanza": {
          "title": "Laura Constanza",
          "description": "Footwear posts and styling ideas: product compositions, outfit combinations and brand promotions.",
          "posts": {
            "eva": {
              "alt": "Eva ankle boots in black with an animal-print detail and in burgundy, on white with the Laura Constanza name."
            },
            "isadora": {
              "alt": "A black Isadora ankle boot with buckles and colored pencils around the ankle, on a white background."
            },
            "monochrome": {
              "alt": "A #LAURATIP outfit collage with a striped shirt, black coat, sunglasses, camera, handbag and black boots."
            },
            "perfect-pair": {
              "alt": "A model wearing black boots beside Get the perfect pair; an Ahora 12 installment promotion and the address Pumacahua 209."
            },
            "kathy": {
              "alt": "Kathy ankle boots in black and tan with decorative flourishes on white."
            },
            "burgundy": {
              "alt": "A #LAURATIP outfit collage with a burgundy dress and boots, a tan jacket and handbag, a watch and accessories."
            }
          }
        }
      }
    }
  }
}
