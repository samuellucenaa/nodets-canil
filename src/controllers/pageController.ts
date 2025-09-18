import type { Request, Response } from "express";
import {pet} from "../models/pet.ts"

export const home = (req: Request, res: Response)=>{
    let lista = pet.getAll()

    res.render('pages/page', {
        menu: {
            all: true,
            dog: false,
            cat: false,
            fish: false
        },
        banner: {
            title: 'Todos os animais',
            background: '/public/images/allanimails.jpg'
        },
        lista
    })
}

export const cachorros = (req: Request, res: Response)=>{
    
    let lista = pet.getFromType('dog')

    res.render('pages/page', {
        menu: {
            all: false,
            dog: true,
            cat: false,
            fish: false
        },
        banner: {
            title: 'Todos os cachorros',
            background: '/public/images/banner_dog.jpg'
        },
        lista
    })
}

export const gatos = (req: Request, res: Response)=>{
    let lista = pet.getFromType('cat')
    
    res.render('pages/page', {
        menu: {
            all: false,
            dog: false,
            cat: true,
            fish: false
        },
        banner: {
            title: 'Todos os gatos',
            background: '/public/images/banner_cat.jpg'
        },
        lista
    })
}

export const peixes = (req: Request, res: Response)=>{
    let lista = pet.getFromType('fish')

    res.render('pages/page', {
        menu: {
            all: false,
            dog: false,
            cat: false,
            fish: true
        },
        banner: {
            title: 'Todos os peixes',
            background: '/public/images/banner_fish.jpg'
        },
        lista
    })
}