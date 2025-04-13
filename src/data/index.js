export const imagesUrl = [
  "/images/slide1.webp",
  "images/slide2.webp",
  "/images/slide3.webp",
  "/images/slide4.webp",
  "/images/slide5.webp",
  "/images/slide6.webp",
];

export const REGISTER_FORM = [
  {
    name: "username",
    placeholder: "Username",
    type: "text",
    validation: {
      required: true,
      minLength: 5,
    },
  },
  {
    name: "email",
    placeholder: "Email",
    type: "email",
    validation: {
      required: true,
      pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
    },
  },
  {
    name: "password",
    placeholder: "Password",
    type: "password",
    validation: {
      required: true,
      minLength: 6,
    },
  },
];

export const LOGIN_FORM = [
  {
    name: "identifier",
    placeholder: "Email",
    type: "email",
    validation: {
      required: true,
      minLength: 5,
    },
  },
  {
    name: "password",
    placeholder: "Password",
    type: "password",
    validation: {
      required: true,
      pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
    },
  },
];

export const logoImages = [
  {
    logo: "images/Essence Cosmetics_idd7WKUgB-_1.png",
  },
  {
    logo: "images/clamour.png",
  },
  {
    logo: "images/velvet touch.png",
  },
  {
    logo: "images/chiccosmetics.png",
  },
  {
    logo: "https://cdn.brandfetch.io/idjG3oGLlv/w/767/h/214/theme/light/logo.png?c=1bxid64Mup7aczewSAYMX&t=1695032076781",
  },
  {
    logo: "https://brandfetch.com/calvinklein.com.tw?view=library&library=default&collection=logos&asset=idw9qmbxrp&utm_source=https%253A%252F%252Fbrandfetch.com%252Fcalvinklein.com.tw&utm_medium=copyAction&utm_campaign=brandPageReferral",
  },

  {
    logo: "https://brandfetch.com/chanellemedical.com?view=library&library=default&collection=logos&asset=idP-IbZDkf&utm_source=https%253A%252F%252Fbrandfetch.com%252Fchanellemedical.com&utm_medium=copyAction&utm_campaign=brandPageReferral",
  },
  {
    logo: "https://brandfetch.com/dior.com?view=library&library=default&collection=logos&asset=ideYgQUHAY&utm_source=https%253A%252F%252Fbrandfetch.com%252Fdior.com&utm_medium=copyAction&utm_campaign=brandPageReferral",
  },
  {
    logo: "https://brandfetch.com/dolcegabbana.com?view=library&library=default&collection=logos&asset=idjbA7LMdZ&utm_source=https%253A%252F%252Fbrandfetch.com%252Fdolcegabbana.com&utm_medium=copyAction&utm_campaign=brandPageReferral",
  },
  {
    logo: "https://brandfetch.com/gucci.com?view=library&library=default&collection=logos&asset=id-kqqPX3K&utm_source=https%253A%252F%252Fbrandfetch.com%252Fgucci.com&utm_medium=copyAction&utm_campaign=brandPageReferral",
  },
  {
    logo: "https://brandfetch.com/annibalecolombo.com?view=library&library=default&collection=logos&asset=idImCX6_bH&utm_source=https%253A%252F%252Fbrandfetch.com%252Fannibalecolombo.com&utm_medium=copyAction&utm_campaign=brandPageReferral",
  },
  {
    logo: "https://brandfetch.com/frontera.com?view=library&library=default&collection=logos&asset=id0biVBbUP&utm_source=https%253A%252F%252Fbrandfetch.com%252Ffrontera.com&utm_medium=copyAction&utm_campaign=brandPageReferral",
  },
  {
    logo: "https://brandfetch.com/knoll.com?view=library&library=default&collection=logos&asset=id8JXzhBn5&utm_source=https%253A%252F%252Fbrandfetch.com%252Fknoll.com&utm_medium=copyAction&utm_campaign=brandPageReferral",
  },
  {
    logo: "https://brandfetch.com/bathtrendsusa.com?view=library&library=default&collection=logos&asset=idyiOYxT7M&utm_source=https%253A%252F%252Fbrandfetch.com%252Fbathtrendsusa.com&utm_medium=copyAction&utm_campaign=brandPageReferral",
  },
  {
    logo: "https://brandfetch.com/apple.com?view=library&library=default&collection=logos&asset=idJBc9nPEf&utm_source=https%253A%252F%252Fbrandfetch.com%252Fapple.com&utm_medium=copyAction&utm_campaign=brandPageReferral",
  },
  {
    logo: "https://brandfetch.com/asus.com?view=library&library=default&collection=logos&asset=id_84dYwNJ&utm_source=https%253A%252F%252Fbrandfetch.com%252Fasus.com&utm_medium=copyAction&utm_campaign=brandPageReferral",
  },
  {
    logo: "https://brandfetch.com/huawei.com?view=library&library=default&collection=logos&asset=iduNF5NSsw&utm_source=https%253A%252F%252Fbrandfetch.com%252Fhuawei.com&utm_medium=copyAction&utm_campaign=brandPageReferral",
  },
  {
    logo: "https://brandfetch.com/lenovo.com?view=library&library=default&collection=logos&asset=idDXuX8rvi&utm_source=https%253A%252F%252Fbrandfetch.com%252Flenovo.com&utm_medium=copyAction&utm_campaign=brandPageReferral",
  },
  {
    logo: "https://brandfetch.com/dell.com?view=library&library=default&collection=logos&asset=idTEqzJ1Jh&utm_source=https%253A%252F%252Fbrandfetch.com%252Fdell.com&utm_medium=copyAction&utm_campaign=brandPageReferral",
  },
  {
    logo: "https://brandfetch.com/fashiontrendsetter.com?view=library&library=default&collection=logos&asset=idXkTBDJ_3&utm_source=https%253A%252F%252Fbrandfetch.com%252Ffashiontrendsetter.com&utm_medium=copyAction&utm_campaign=brandPageReferral",
  },
  {
    logo: "https://brandfetch.com/gigabyte.com?view=library&library=default&collection=logos&asset=id3_FnCvSk&utm_source=https%253A%252F%252Fbrandfetch.com%252Fgigabyte.com&utm_medium=copyAction&utm_campaign=brandPageReferral",
  },
  {
    logo: "https://brandfetch.com/montticlassicwear.com?view=library&library=default&collection=logos&asset=idIDUJrm1X&utm_source=https%253A%252F%252Fbrandfetch.com%252Fmontticlassicwear.com&utm_medium=copyAction&utm_campaign=brandPageReferral",
  },
  {
    logo: "https://brandfetch.com/casualcomfortsandal.com?view=library&library=default&collection=logos&asset=idDcN4_0f4&utm_source=https%253A%252F%252Fbrandfetch.com%252Fcasualcomfortsandal.com&utm_medium=copyAction&utm_campaign=brandPageReferral",
  },
  {
    logo: "https://brandfetch.com/my-urbanchic.com?view=library&library=default&collection=logos&asset=idSI6sxBhF&utm_source=https%253A%252F%252Fbrandfetch.com%252Fmy-urbanchic.com&utm_medium=copyAction&utm_campaign=brandPageReferral",
  },
  {
    logo: "https://brandfetch.com/nike.com?view=library&library=default&collection=logos&asset=idu40oL14Z&utm_source=https%253A%252F%252Fbrandfetch.com%252Fnike.com&utm_medium=copyAction&utm_campaign=brandPageReferral",
  },
  {
    logo: "https://brandfetch.com/puma.com?view=library&library=default&collection=logos&asset=idZScXivAN&utm_source=https%253A%252F%252Fbrandfetch.com%252Fpuma.com&utm_medium=copyAction&utm_campaign=brandPageReferral",
  },
  {
    logo: "https://brandfetch.com/shopoffwhite.com?view=library&library=default&collection=logos&asset=idP3gascnt&utm_source=https%253A%252F%252Fbrandfetch.com%252Fshopoffwhite.com&utm_medium=copyAction&utm_campaign=brandPageReferral",
  },
  {
    logo: "https://www.shutterstock.com/shutterstock/photos/2437262859/display_1500/stock-vector-digital-smart-watch-logo-icon-design-stock-vectors-illustrations-of-logo-property-smart-watch-2437262859.jpg",
  },
  {
    logo: "https://brandfetch.com/longines.com?view=library&library=default&collection=logos&asset=id-4KqgfpN&utm_source=https%253A%252F%252Fbrandfetch.com%252Flongines.com&utm_medium=copyAction&utm_campaign=brandPageReferral",
  },
  {
    logo: "https://brandfetch.com/rolex.com?view=library&library=default&collection=logos&asset=id4UdXw4po&utm_source=https%253A%252F%252Fbrandfetch.com%252Frolex.com&utm_medium=copyAction&utm_campaign=brandPageReferral",
  },
  {
    logo: "https://brandfetch.com/amazon.com?view=library&library=default&collection=logos&asset=id6pZPYqHT&utm_source=https%253A%252F%252Fbrandfetch.com%252Famazon.com&utm_medium=copyAction&utm_campaign=brandPageReferral",
  },
  {
    logo: "https://brandfetch.com/relentlessbeats.com?view=library&library=default&collection=logos&asset=id_gRtsDXJ&utm_source=https%253A%252F%252Fbrandfetch.com%252Frelentlessbeats.com&utm_medium=copyAction&utm_campaign=brandPageReferral",
  },
  {
    logo: "https://brandfetch.com/techgear.gr?view=library&library=default&collection=logos&asset=idjhMBxLQ6&utm_source=https%253A%252F%252Fbrandfetch.com%252Ftechgear.gr&utm_medium=copyAction&utm_campaign=brandPageReferral",
  },
  {
    logo: "",
  },
  {
    logo: "https://brandfetch.com/gadgetmasters.com.au?view=library&library=default&collection=logos&asset=idX64uF-AG&utm_source=https%253A%252F%252Fbrandfetch.com%252Fgadgetmasters.com.au&utm_medium=copyAction&utm_campaign=brandPageReferral",
  },
  {
    logo: "https://brandfetch.com/snaptechit.com?view=library&library=default&collection=logos&asset=id4P0QT8nF&utm_source=https%253A%252F%252Fbrandfetch.com%252Fsnaptechit.com&utm_medium=copyAction&utm_campaign=brandPageReferral",
  },
  {
    logo: "https://brandfetch.com/patagoniaprovisions.com?view=library&library=default&collection=logos&asset=idS3es0l5k&utm_source=https%253A%252F%252Fbrandfetch.com%252Fpatagoniaprovisions.com&utm_medium=copyAction&utm_campaign=brandPageReferral",
  },
  {
    logo: "https://www.shutterstock.com/shutterstock/photos/1346649860/display_1500/stock-photo-marion-circa-march-general-motors-logo-and-signage-at-the-metal-fabricating-division-gm-1346649860.jpg",
  },
  {
    logo: "https://brandfetch.com/kawasaki.com?view=library&library=default&collection=logos&asset=idCBgnoUco&utm_source=https%253A%252F%252Fbrandfetch.com%252Fkawasaki.com&utm_medium=copyAction&utm_campaign=brandPageReferral",
  },
  {
    logo: "https://brandfetch.com/motogp.com?view=library&library=default&collection=logos&asset=idHsITT7d7&utm_source=https%253A%252F%252Fbrandfetch.com%252Fmotogp.com&utm_medium=copyAction&utm_campaign=brandPageReferral",
  },
  {
    logo: "https://scootmasters.com.au/uploads/1/3/7/8/137847501/published/sm-hd-logo2.jpg?1631580591",
  },
  {
    logo: "https://brandfetch.com/speedmaster79.com?view=library&library=default&collection=logos&asset=idHcP7WGTy&utm_source=https%253A%252F%252Fbrandfetch.com%252Fspeedmaster79.com&utm_medium=copyAction&utm_campaign=brandPageReferral",
  },
  {
    logo: "https://brandfetch.com/attitudeliving.com?view=library&library=default&collection=logos&asset=idmYDjjwSK&utm_source=https%253A%252F%252Fbrandfetch.com%252Fattitudeliving.com&utm_medium=copyAction&utm_campaign=brandPageReferral",
  },
  {
    logo: "https://brandfetch.com/olay.com?view=library&library=default&collection=logos&asset=idIs8jQgIw&utm_source=https%253A%252F%252Fbrandfetch.com%252Folay.com&utm_medium=copyAction&utm_campaign=brandPageReferral",
  },
  {
    logo: "https://brandfetch.com/vaseline.com?view=library&library=default&collection=logos&asset=ido467Qyll&utm_source=https%253A%252F%252Fbrandfetch.com%252Fvaseline.com&utm_medium=copyAction&utm_campaign=brandPageReferral",
  },
  {
    logo: "https://brandfetch.com/oppo.com?view=library&library=default&collection=logos&asset=ideybZNjGZ&utm_source=https%253A%252F%252Fbrandfetch.com%252Foppo.com&utm_medium=copyAction&utm_campaign=brandPageReferral",
  },
  {
    logo: "https://brandfetch.com/realme.com?view=library&library=default&collection=logos&asset=idaY33QoY7&utm_source=https%253A%252F%252Fbrandfetch.com%252Frealme.com&utm_medium=copyAction&utm_campaign=brandPageReferral",
  },
  {
    logo: "https://brandfetch.com/samsung.com?view=library&library=default&collection=logos&asset=idrZcaRCpR&utm_source=https%253A%252F%252Fbrandfetch.com%252Fsamsung.com&utm_medium=copyAction&utm_campaign=brandPageReferral",
  },
  {
    logo: "https://brandfetch.com/vivo.com?view=library&library=default&collection=logos&asset=idRtF8FtKT&utm_source=https%253A%252F%252Fbrandfetch.com%252Fvivo.com&utm_medium=copyAction&utm_campaign=brandPageReferral",
  },
  {
    logo: "https://img.freepik.com/free-vector/business-logo-template-glasses-shop-branding-design-black-white-vector_53876-156441.jpg?ga=GA1.1.1417530344.1744486167&semt=ais_hybrid&w=740",
  },
  {
    logo: "https://brandfetch.com/fashionfundey.com?view=library&library=default&collection=logos&asset=id_TptEMBU&utm_source=https%253A%252F%252Fbrandfetch.com%252Ffashionfundey.com&utm_medium=copyAction&utm_campaign=brandPageReferral",
  },
  {
    logo: "https://brandfetch.com/chryslercapital.com?view=library&library=default&collection=logos&asset=iddmJxL6BK&utm_source=https%253A%252F%252Fbrandfetch.com%252Fchryslercapital.com&utm_medium=copyAction&utm_campaign=brandPageReferral",
  },
  {
    logo: "https://brandfetch.com/dodgerblue.com?view=library&library=default&collection=logos&asset=id4FK2L3Iu&utm_source=https%253A%252F%252Fbrandfetch.com%252Fdodgerblue.com&utm_medium=copyAction&utm_campaign=brandPageReferral",
  },
  {
    logo: "https://brandfetch.com/thebudgetfashionista.com?view=library&library=default&collection=logos&asset=idKQBwVq_o&utm_source=https%253A%252F%252Fbrandfetch.com%252Fthebudgetfashionista.com&utm_medium=copyAction&utm_campaign=brandPageReferral",
  },
  {
    logo: "https://brandfetch.com/heshers.com?view=library&library=default&collection=logos&asset=idXuYFTG3G&utm_source=https%253A%252F%252Fbrandfetch.com%252Fheshers.com&utm_medium=copyAction&utm_campaign=brandPageReferral",
  },
  {
    logo: "https://brandfetch.com/prada.com?view=library&library=default&collection=logos&asset=idgVr-1sRM&utm_source=https%253A%252F%252Fbrandfetch.com%252Fprada.com&utm_medium=copyAction&utm_campaign=brandPageReferral",
  },
  {
    logo: "https://brandfetch.com/domuselegancecollection.com?view=library&library=default&collection=logos&asset=idB59qT3BM&utm_source=https%253A%252F%252Fbrandfetch.com%252Fdomuselegancecollection.com&utm_medium=copyAction&utm_campaign=brandPageReferral",
  },
  {
    logo: "https://i.pinimg.com/736x/55/a9/93/55a993ae872b0905d4e8c44b658a3e91.jpg",
  },
  {
    logo: "https://brandfetch.com/fashiondivadesign.com?view=library&library=default&collection=logos&asset=idH23toV7M&utm_source=https%253A%252F%252Fbrandfetch.com%252Ffashiondivadesign.com&utm_medium=copyAction&utm_campaign=brandPageReferral",
  },
  {
    logo: "https://brandfetch.com/pampilloniajewelers.com?view=library&library=default&collection=logos&asset=idyMvl45Wt&utm_source=https%253A%252F%252Fbrandfetch.com%252Fpampilloniajewelers.com&utm_medium=copyAction&utm_campaign=brandPageReferral",
  },
  {
    logo: "https://images.seeklogo.com/logo-png/5/1/fashion-express-logo-png_seeklogo-52168.png?v=1955422096026097848",
  },
  {
    logo: "https://brandfetch.com/iwco.com?view=library&library=default&collection=logos&asset=idKJwY6zak&utm_source=https%253A%252F%252Fbrandfetch.com%252Fiwco.com&utm_medium=copyAction&utm_campaign=brandPageReferral",
  },
  {
    logo: "https://brandfetch.com/fashiongold.lt?view=library&library=default&collection=logos&asset=idQSOkJmKq&utm_source=https%253A%252F%252Fbrandfetch.com%252Ffashiongold.lt&utm_medium=copyAction&utm_campaign=brandPageReferral",
  },
  {
    logo: "https://brandfetch.com/fashionandco.ae?view=library&library=default&collection=logos&asset=idiWjxqSTg&utm_source=https%253A%252F%252Fbrandfetch.com%252Ffashionandco.ae&utm_medium=copyAction&utm_campaign=brandPageReferral",
  },
];
