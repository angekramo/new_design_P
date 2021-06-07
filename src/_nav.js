import React from 'react'
import CIcon from '@coreui/icons-react'
import { NavLink } from 'react-router-dom'

const _nav = [
  {
    _component: 'CNavItem',
    as: NavLink,
    anchor: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    _component: 'CNavGroup',
    as: NavLink,
    anchor: 'Utilisateur',
    to: '/to',
    icon: <CIcon name="cil-puzzle" customClasses="nav-icon" />,
    items: [
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Liste',
        to: '/base/accordion',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Ajouter',
        to: '/base/breadcrumbs',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Profil',
        to: '/base/cards',
      }
    ]
  },
  {
    _component: 'CNavGroup',
    as: NavLink,
    anchor: 'Vehicule/Moto',
    to: '/to',
    icon: <CIcon name="cil-puzzle" customClasses="nav-icon" />,
    items: [
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Liste',
        to: '/base/accordion',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Ajouter',
        to: '/base/breadcrumbs',
      }
      ,
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Fiche Journaliere',
        to: '/base/breadcrumbs',
      }
    ]
  },
  {
    _component: 'CNavGroup',
    as: NavLink,
    anchor: 'Demandes',
    to: '/to',
    icon: <CIcon name="cil-puzzle" customClasses="nav-icon" />,
    items: [
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Liste',
        to: '/base/accordion',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Ajouter',
        to: '/base/breadcrumbs',
      }
    ]
  },
  {
    _component: 'CNavGroup',
    as: NavLink,
    anchor: 'Bon Carburant',
    to: '/to',
    icon: <CIcon name="cil-puzzle" customClasses="nav-icon" />,
    items: [
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Liste',
        to: '/base/accordion',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Ajouter',
        to: '/base/breadcrumbs',
      }
    ]
  },
  {
    _component: 'CNavGroup',
    as: NavLink,
    anchor: 'Pannes',
    to: '/to',
    icon: <CIcon name="cil-puzzle" customClasses="nav-icon" />,
    items: [
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Liste',
        to: '/base/accordion',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Ajouter',
        to: '/base/breadcrumbs',
      }
    ]
  },
]

export default _nav
