# exhibits-omeka-s-theme

### Info
Omeka S theme based on bootstrap 3.3.7 and project omekas-bootstrap-theme https://github.com/UniTasLibrary/omekas-bootstrap-theme

Follow the documentation at: https://omeka.org/s/docs/user-manual/sites/site_theme/#installing-themes to install the theme.

### Prerequisites modules
* IIIF server https://gitlab.com/Daniel-KM/Omeka-S-module-IiifServer
* Mirador viewer https://omeka.org/s/modules/Mirador/
* Image server https://gitlab.com/Daniel-KM/Omeka-S-module-ImageServer

### Project treeview
```
├── asset
│   ├── css
│   │   └── custom.css
│   └── js
│       ├── default.js
│       ├── dharc.js
│       ├── stats.js
│       └── videofix.js
├── config
│   └── theme.ini
├── LICENSE
├── README.md
├── theme.jpg
└── view
    ├── common
    │   ├── advanced-search
    │   │   ├── item-sets.phtml
    │   │   ├── properties.phtml
    │   │   ├── resource-class.phtml
    │   │   └── site-pool.phtml
    │   ├── form-row.phtml
    │   ├── main-navigation.phtml
    │   ├── pagination.phtml
    │   ├── search-form.phtml
    │   ├── site-list-entry.phtml
    │   └── site-page-pagination.phtml
    ├── layout
    │   └── layout.phtml
    └── omeka
        └── site
            ├── item
            │   ├── browse.phtml
            │   └── show.phtml
            ├── media
            │   └── show.phtml
            └── page
                ├── main-navigation.phtml
                ├── navigation.phtml
                └── show.phtml
```
