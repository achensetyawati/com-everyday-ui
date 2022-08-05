import {inject, Lazy} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import {RestService} from '../../utils/rest-service';
import { Container } from 'aurelia-dependency-injection';
import { Config } from "aurelia-api";

const serviceUriStorages = 'inventories/monitoring';  

export class Service extends RestService{
  
  constructor(http, aggregator, config, api) {
    super(http, aggregator, config, "master");
  }  
  
  getAllInventory(storageId, keyword) {
    var config = Container.instance.get(Config);
    var endpoint = config.getEndpoint("inventory").client.baseUrl + `${serviceUriStorages}/by-user?storageId=${storageId}&filter=${keyword}`;
    // var endpoint = config.getEndpoint("inventory").client.baseUrl + 'storages/' + storageId+ '/inventories?keyword=' + keyword; 
    return super.get(endpoint);
  }

  getItem(itemCode, storageId){
    var config = Container.instance.get(Config);
    var endpoint = config.getEndpoint("inventory").client.baseUrl + `inventory/code?itemData=${itemCode}&source=${storageId}`;
    return super.get(endpoint);
  }
  
  generateExcel(storageId, keyword) {
    var config = Container.instance.get(Config);
    var endpoint = config.getEndpoint("inventory").client.baseUrl + `${serviceUriStorages}/by-user/download?storageId=${storageId}&filter=${keyword}`; 
    return super.getXls(endpoint);
  }
  
  getAllMovement(storageId, itemCode) {
    var config = Container.instance.get(Config);
    var endpoint = config.getEndpoint("inventory").client.baseUrl + `${serviceUriStorages}/by-movements?storageId=${storageId}&itemCode=${itemCode}`;  
    return super.get(endpoint);
  }

  movementExcel(storageId, itemCode) {
    var config = Container.instance.get(Config);
    var endpoint = config.getEndpoint("inventory").client.baseUrl + `${serviceUriStorages}/by-movements/download?storageId=${storageId}&itemCode=${itemCode}`; 
    return super.getXls(endpoint);
  }

  // getAllMovementByDate(storageId, itemCode, month, year) {
  //   var config = Container.instance.get(Config);
  //   var endpoint = config.getEndpoint("inventory").client.baseUrl + `${serviceUriStorages}/get-movements-by-date?storageId=${storageId}&itemCode=${itemCode}&month=${month}&year=${year}`;  
  //   return super.get(endpoint);
  // }

  // movementExcelByDate(storageId, itemCode, month, year) {
  //   var config = Container.instance.get(Config);
  //   var endpoint = config.getEndpoint("inventory").client.baseUrl + `${serviceUriStorages}/get-movements-by-date/download?storageId=${storageId}&itemCode=${itemCode}&month=${month}&year=${year}`; 
  //   return super.getXls(endpoint);
  // }
   
}