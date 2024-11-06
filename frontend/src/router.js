
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);


import Manager from "./components/listers/Cards"
import Detail from "./components/listers/Detail"
import Manager from "./components/listers/Cards"
import Detail from "./components/listers/Detail"
import Manager from "./components/listers/Cards"
import Detail from "./components/listers/Detail"
import Manager from "./components/listers/Cards"
import Detail from "./components/listers/Detail"

import Manager from "./components/listers/Cards"
import Detail from "./components/listers/Detail"

import Manager from "./components/listers/Cards"
import Detail from "./components/listers/Detail"

import Manager from "./components/listers/Cards"
import Detail from "./components/listers/Detail"
import Manager from "./components/listers/Cards"
import Detail from "./components/listers/Detail"
import Manager from "./components/listers/Cards"
import Detail from "./components/listers/Detail"
import Manager from "./components/listers/Cards"
import Detail from "./components/listers/Detail"

import Manager from "./components/listers/Cards"
import Detail from "./components/listers/Detail"
import Manager from "./components/listers/Cards"
import Detail from "./components/listers/Detail"
import CodeManager from "./components/listers/CodeCards"
import CodeDetail from "./components/listers/CodeDetail"


export default new Router({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes: [
            {
                path: '//',
                name: 'Manager',
                component: Manager
            },
            {
                path: '///:id',
                name: 'Detail',
                component: Detail
            },
            {
                path: '//',
                name: 'Manager',
                component: Manager
            },
            {
                path: '///:id',
                name: 'Detail',
                component: Detail
            },
            {
                path: '//',
                name: 'Manager',
                component: Manager
            },
            {
                path: '///:id',
                name: 'Detail',
                component: Detail
            },
            {
                path: '//',
                name: 'Manager',
                component: Manager
            },
            {
                path: '///:id',
                name: 'Detail',
                component: Detail
            },

            {
                path: '//',
                name: 'Manager',
                component: Manager
            },
            {
                path: '///:id',
                name: 'Detail',
                component: Detail
            },

            {
                path: '//',
                name: 'Manager',
                component: Manager
            },
            {
                path: '///:id',
                name: 'Detail',
                component: Detail
            },

            {
                path: '//',
                name: 'Manager',
                component: Manager
            },
            {
                path: '///:id',
                name: 'Detail',
                component: Detail
            },
            {
                path: '//',
                name: 'Manager',
                component: Manager
            },
            {
                path: '///:id',
                name: 'Detail',
                component: Detail
            },
            {
                path: '//',
                name: 'Manager',
                component: Manager
            },
            {
                path: '///:id',
                name: 'Detail',
                component: Detail
            },
            {
                path: '//',
                name: 'Manager',
                component: Manager
            },
            {
                path: '///:id',
                name: 'Detail',
                component: Detail
            },

            {
                path: '//',
                name: 'Manager',
                component: Manager
            },
            {
                path: '///:id',
                name: 'Detail',
                component: Detail
            },
            {
                path: '//',
                name: 'Manager',
                component: Manager
            },
            {
                path: '///:id',
                name: 'Detail',
                component: Detail
            },
            {
                path: '//codes',
                name: 'CodeManager',
                component: CodeManager
            },
            {
                path: '//codes/:id',
                name: 'CodeDetail',
                component: CodeDetail
            },



    ]
})
