import type { Request, Response } from "express";

export const home = (req: Request, res: Response)=>{
    res.render('pages/page', {
        banner: {
            title: 'Todos os animais',
            background: '/public/images/allanimails.jpg'
        }
    })
}

export const cachorros = (req: Request, res: Response)=>{
    res.render('pages/page', {
        banner: {
            title: 'Todos os cachorros',
            background: '/public/images/banner_dog.jpg'
        }
    })
}

export const gatos = (req: Request, res: Response)=>{
    res.render('pages/page', {
        banner: {
            title: 'Todos os gatos',
            background: '/public/images/cat.jpg'
        }
    })
}

export const peixes = (req: Request, res: Response)=>{
    res.render('pages/page', {
        banner: {
            title: 'Todos os peixes',
            background: '/public/images/fish.jpg'
        }
    })
}