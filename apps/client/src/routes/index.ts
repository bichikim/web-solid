import {lazy} from 'solid-js'
import type {RouteDefinition} from 'solid-app-router'

export const routes: RouteDefinition[] = [
  {
    children: [{component: lazy(() => import('pages/main/Index')), path: ''}],
    component: lazy(() => import('layouts/main-layout/Index')),
    path: '/',
  },
]
