import { Link, useOutletContext, useParams } from 'react-router-dom'
import { usePageMetadata } from '../hooks/usePageMetadata.js'
import { paths } from '../routes/paths.js'
import './DonutsProjectDetail.scss'
import './DonutsSectionPage.scss'

const asset = (name) => new URL(`../assets/images/projects/front-end-ux/donut-shop/internal/${name}`, import.meta.url).href
const gallery = Array.from({ length: 8 }, (_, index) => asset(`foto-${index + 1}-galeria-grid-desk.jpg`))
const recipes = ['dona-1-manjar.png', 'dona-2-gomitas.png', 'dona-4-chispas-chocolate.png', 'dona-5-frutilla.png', 'dona-6-cookies-and-cream.png'].map(asset)
const places = [
  ['Dum Dum Doughnuts', 'foto-dum-dum-donuts.jpg', 'Donas gourmet creativas, elaboradas con ingredientes de alta calidad.'],
  ['Happy Donuts', 'foto-happy-donuts.jpg', 'Donas horneadas con métodos tradicionales y una textura ligera.'],
  ['Krispy Kreme', 'foto-krispy-creme-enfield.png', 'Una cadena internacional reconocida por sus donas y café.'],
  ['Farm Girl', 'foto-farm-girl.png', 'Donas glaseadas, café recién hecho y productos de pastelería.'],
  ['Dunkin’', 'foto-dunkin-donuts.png', 'Cafetería especializada en donas, café y otros productos de repostería.'],
]
const copy = {
  es: {
    navLabel: 'Navegación de Donuts', home: 'Inicio', gallery: 'Galería', places: 'Lugares', recipes: 'Recetas', contact: 'Contacto',
    titles: { gallery: 'Esponjosas y deliciosas', places: 'Donas por el mundo', recipes: 'Recetas de donas', contact: 'Contacto' },
    intro: {
      gallery: 'Un festín visual de donas: glaseados irresistibles, combinaciones únicas y momentos dulces.',
      places: 'Descubre destinos deliciosos para satisfacer tus antojos de donas.',
      recipes: 'Prepara donas caseras desde la mezcla hasta el glaseado.',
      contact: '¡Nos encantaría saber de ti! Comparte tus preguntas y sugerencias.',
    }, ingredients: ['2 huevos', '3 cucharadas de azúcar', 'Esencia de vainilla y naranja', '90 g de mantequilla', '1 taza de puré de papa', '3½ tazas de harina', 'Aceite para freír', 'Chocolate para decorar'],
    steps: ['Mezcla la harina, el azúcar, la levadura y la sal.', 'Bate los huevos y agrega leche, mantequilla derretida y vainilla.', 'Une los ingredientes hasta formar una masa.', 'Extiende la masa y corta las donas.', 'Fríe hasta dorar y deja escurrir.', 'Decora con azúcar glas o glaseado.'],
    send: 'Enviar', name: 'Nombre', email: 'Correo', message: 'Mensaje', address: 'Av. Apoquindo 1805, Torre I, piso 8, Las Condes, Santiago, Chile.',
  },
  en: {
    navLabel: 'Donuts navigation', home: 'Home', gallery: 'Gallery', places: 'Places', recipes: 'Recipes', contact: 'Contact',
    titles: { gallery: 'Fluffy and delicious', places: 'Donuts around the world', recipes: 'Donut recipes', contact: 'Contact' },
    intro: { gallery: 'A visual treat of donuts, irresistible icing, unique combinations and sweet moments.', places: 'Discover delicious destinations for your donut cravings.', recipes: 'Make homemade donuts from mixing to icing.', contact: 'We would love to hear from you. Send your questions and suggestions.' },
    ingredients: ['2 eggs', '3 tablespoons sugar', 'Vanilla and orange extract', '90 g butter', '1 cup mashed potato', '3½ cups flour', 'Oil for frying', 'Chocolate for decorating'],
    steps: ['Mix flour, sugar, yeast and salt.', 'Beat eggs and add milk, melted butter and vanilla.', 'Combine ingredients into a dough.', 'Roll out the dough and cut the donuts.', 'Fry until golden and drain.', 'Decorate with icing sugar or glaze.'],
    send: 'Send', name: 'Name', email: 'Email', message: 'Message', address: 'Av. Apoquindo 1805, Tower I, floor 8, Las Condes, Santiago, Chile.',
  },
}

function DonutsSectionPage() {
  const { text } = useOutletContext()
  const { section } = useParams()
  const lang = text.categories.illustration === 'Illustration' ? 'en' : 'es'
  const t = copy[lang]
  const valid = ['gallery', 'places', 'recipes', 'contact'].includes(section)
  const titleRef = usePageMetadata(valid ? t.titles[section] : 'Donuts')
  const navigation = [['home', t.home], ['gallery', t.gallery], ['places', t.places], ['recipes', t.recipes], ['contact', t.contact]]

  if (!valid) return <p>Page not found</p>

  return (
    <article className="project-detail donuts-project donuts-section-project" aria-labelledby="donuts-section-title">
      <div className="project-detail-inner donuts-project-inner">
        <div className="donuts-landing">
          <header className="donuts-landing-header">
            <Link className="donuts-landing-brand" to={paths.projectDetail('donut-shop')}>DONUTS</Link>
            <nav aria-label={t.navLabel}><ul>{navigation.map(([id, label]) => <li key={id}><Link aria-current={(id === 'home' && section === 'home') || id === section ? 'page' : undefined} to={id === 'home' ? paths.projectDetail('donut-shop') : paths.donutShopPage(id)}>{label}</Link></li>)}</ul></nav>
          </header>
          <div className="donuts-section-content">
            <header className="donuts-section-intro"><p className="donuts-landing-eyebrow">DONUTS</p><h1 id="donuts-section-title" ref={titleRef} tabIndex={-1}>{t.titles[section]}</h1><p>{t.intro[section]}</p></header>
            {section === 'gallery' && <div className="donuts-gallery">{gallery.map((image, index) => <img key={image} src={image} alt={lang === 'es' ? `Dona decorada, fotografía ${index + 1}` : `Decorated donut, photograph ${index + 1}`} loading="lazy" />)}</div>}
            {section === 'places' && <div className="donuts-place-grid">{places.map(([name, image, description]) => <article key={name}><img src={asset(image)} alt="" loading="lazy"/><h2>{name}</h2><p>{lang === 'en' ? ['Creative gourmet donuts made with high quality ingredients.', 'Baked donuts using traditional methods with a light texture.', 'An international chain known for donuts and coffee.', 'Glazed donuts, fresh coffee and bakery products.', 'A coffee shop specializing in donuts and baked goods.'][places.findIndex((place) => place[0] === name)] : description}</p></article>)}</div>}
            {section === 'recipes' && <><div className="donuts-recipe-hero"><img src={asset('foto-ingredientes-desk.jpg')} alt={lang === 'es' ? 'Ingredientes para preparar donas' : 'Ingredients for making donuts'} /><div><h2>{lang === 'es' ? 'Ingredientes' : 'Ingredients'}</h2><ul>{t.ingredients.map((item) => <li key={item}>{item}</li>)}</ul></div></div><h2 className="donuts-steps-title">{lang === 'es' ? 'Preparación' : 'Preparation'}</h2><ol className="donuts-recipe-steps">{t.steps.map((step) => <li key={step}>{step}</li>)}</ol><div className="donuts-recipe-donuts">{recipes.map((image) => <img key={image} src={image} alt="" loading="lazy" />)}</div></>}
            {section === 'contact' && <div className="donuts-contact-layout"><form onSubmit={(event) => event.preventDefault()}><label>{t.name}<input name="name" autoComplete="name" required /></label><label>{t.email}<input type="email" name="email" autoComplete="email" required /></label><label>{t.message}<textarea name="message" rows="5" required /></label><button type="submit">{t.send}</button></form><img src={asset('donas-formulario.png')} alt={lang === 'es' ? 'Donas decoradas' : 'Decorated donuts'} /><p>{t.address}</p></div>}
          </div>
        </div>
      </div>
    </article>
  )
}

export default DonutsSectionPage
