export const imagesUrl = [
    '/images/slide1.webp',
    'images/slide2.webp',
    '/images/slide3.webp',
    '/images/slide4.webp',
    '/images/slide5.webp',
    '/images/slide6.webp'
]



export const REGISTER_FORM = [
    {   
        name:"username",
        placeholder:"Username",
        type:"text",
        validation:{
            required:true,
            minLength:5
        }
    },
    {   
        name:"email",
        placeholder:"Email",
        type:"email",
        validation:{
            required:true,
            pattern:/^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/
        }
    },
    {   
        name:"password",
        placeholder:"Password",
        type:"password",
        validation:{
            required:true,
            minLength:6
        }
    }
]

export const LOGIN_FORM = [
    {   
        name:"identifier",
        placeholder:"Email",
        type:"email",
        validation:{
            required:true,
            minLength:5
        }
    },
    {   
        name:"password",
        placeholder:"Password",
        type:"password",
        validation:{
            required:true,
            pattern:/^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/
        }
    },
]