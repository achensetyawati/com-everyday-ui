import { inject, Lazy } from 'aurelia-framework';
import { Router } from 'aurelia-router';
import { Service } from './service';

@inject(Router, Service)
export class View {
    data = [];
    info = { page: 1, keyword: '' };
    params = {};
    keyword = '';

    constructor(router, service) {
        this.router = router;
        this.service = service;
    }

    // columns = [
    //     {title: 'No', field: 'Index'}, 
    //     {title: 'Tanggal', field: 'Date'}, 
    //     {title: 'Referensi', field: 'Reference'},
    //     {title: 'Tipe', field: 'Type'},
    //     {title: 'Sebelum', field: 'Before'},
    //     {title: 'Kuantitas', field: 'Quantity'},
    //     {title: 'Setelah', field: 'After'},
    //     {title: 'Deskripsi', field: 'Remark'}
    // ]

    async activate(params) {
        this.params = params;
        this.info.keyword = '';
        var storageId = params.storageId;
        var itemCode = params.itemCode; 
        var result = await this.service.getAllMovement(storageId, itemCode, this.info);
        console.log(result);
        this.data = result;
        this.info = result.info;
        var moment = require('moment');
        for (var obj of this.data) {
            obj.Date = moment(obj.Date, "YYYY-MM-DDTHH:mm:SSSZ").format("DD MMM YYYY - HH:mm:SS")
        }
    }

    loadPage() {
        var params = this.params;
        var keyword = this.info.keyword;
        var storageId = params.storageId;
        var itemCode = params.itemCode; 
        this.service.getAllMovement(storageId, itemCode, this.info)
            .then(result => {
                this.data = result;
                this.info = result.info;
                var moment = require('moment');
                for (var obj of this.data) {
                    obj.Date = moment(obj.Date, "YYYY-MM-DDTHH:mm:SSSZ").format("DD MMM YYYY - HH:mm:SS")
                }
            })
    }

    // async activate(params){
    //     //var params = this.params;
    //     this.tableData=[];
    //     this.params = params;
    //     var keyword = "";
    //     var storageId = params.storageId;
    //     var itemCode = params.itemCode; 
    //     this.service.getAllMovement(storageId, itemCode)
    //         .then(result => {
    //             this.models.refresh();
    //             this.data = result;
    //             //this.info = result.info;
    //             var moment = require('moment');
    //             for (var item of this.data) {
    //                 item.Date = moment(item.Date, "YYYY-MM-DDTHH:mm:SSSZ").format("DD MMM YYYY - HH:mm:SS");
    //                 this.tableData.push(item);
    //             }
    //         })
    // }

    moveexcel(params) {
        var params = this.params;
        //var keyword = this.info.keyword;
        var storageId = params.storageId;
        var itemCode = params.itemCode; 
        this.service.movementExcel(storageId, itemCode);
    }

    changePage(e) {
        var page = e.detail;
        this.info.page = page;
        this.loadPage();
    }

    list() {
        this.router.navigateToRoute('list');
    }
}
