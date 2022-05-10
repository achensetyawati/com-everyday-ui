import { Container } from 'aurelia-dependency-injection';
import { Config } from "aurelia-api";

const resource = 'articles/materials';

module.exports = function (keyword, filter) {

    var config = Container.instance.get(Config);
    var endpoint = config.getEndpoint("master");

    return endpoint.find(resource, { keyword: keyword, filter: JSON.stringify(filter) })
        .then(results => {
            return results.data;
        });
}