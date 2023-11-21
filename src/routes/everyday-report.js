module.exports=[
    {
        route: 'laporan-mutasi-barang',
        name: 'laporan-mutasi-barang',
        moduleId: './modules/laporan/movement-inventory-all/index',
        nav: true,
        title: 'Laporan Mutasi Barang',
        auth: true,
        settings: {
            group: "everyday shop",
            subGroup: "Report",
			permission: { "C.01": 1, "MRD.01": 1 },
            iconClass: "fa fa-dashboard",
        }
    },{
        route: 'laporan-stok',
        name: 'laporan-stok',
        moduleId: './modules/laporan/inventory/index',
        nav: true,
        title: 'Laporan Stok',
        auth: true,
        settings: {
            group: "everyday shop",
            subGroup: "Report",
			permission: { "C.01": 1, "MRD.01": 1 },
            iconClass: "fa fa-dashboard",
        }
    },{
        route: 'laporan-penjualan',
        name: 'laporan-penjualan',
        moduleId: './modules/laporan/sales/index',
        nav: true,
        title: 'Laporan Penjualan',
        auth: true,
        settings: {
            group: "everyday shop",
            subGroup: "Report",
			permission: { "C.01": 1, "MRD.01": 1 },
            iconClass: "fa fa-dashboard",
        }
    },{
        route: 'laporan-stok-period',
        name: 'laporan-stok-period',
        moduleId: './modules/laporan/stock-period/index',
        nav: true,
        title: 'Laporan Stok per Periode',
        auth: true,
        settings: {
            group: "everyday shop",
            subGroup: "Report",
			permission: { "C.01": 1, "MRD.01": 1 },
            iconClass: "fa fa-dashboard",
        }
    }
]