'use strict';

module.exports = function(Employee) {
var app = require('../../../server/server');
var Child = app.models.Child;
var Inregis = app.models.Inregis;

Employee.getName = function(ssid, cb) {
    Employee.findById( ssid, function (err, instance) {
        var response = "Name of Employee is " + instance.name;
        cb(null, response);
        console.log(response);
    });
  };

Employee.getSurname = function(ssid, cb) {
        Employee.findById(ssid, function (err, instance) {
              //  console.log("reponse Instance "+ instance);
                var response = "Surname  is " + instance.surname;
                cb(null, response);
                console.log(response);
            });
  };


Employee.remoteMethod (
    ///api/employees/getname?ssid='1016951Z'
        'getName',
        {
          http: {path: '/getname', verb: 'get'},
          accepts: {arg: 'ssid', type: 'string', http: { source: 'query' } },
          returns: {arg: 'name', type: 'string'}
        }
    );
Employee.remoteMethod (
    ///api/employees/getname?ssid='1016951Z'
        'getSurname',
        {
          http: {path: '/getsurname', verb: 'get'},
          accepts: {arg: 'ssid', type: 'string', http: { source: 'query' } },
          returns: {arg: 'surname', type: 'string'}
        }
    );

};
