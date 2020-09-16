require('dotenv').config()
var hatlog = require('debug')('server:hatlog')
, opcualog = require('debug')('server:opcualog');

const os = require('os')
const imu = require("node-sense-hat").Imu;
const IMU = new imu.IMU();

var imudata;
const collect = () => {
    IMU.getValue((err, data) => {
        if (err !== null) {
            hatlog("Could not read sensor data: ", err);
            return;
        } else {
            imudata = data;
        }
    });
}
hatlog(' start collecting sensor data');
collector = setInterval(collect, 1000);

const opcua = require("node-opcua");
const tags = require('./tags.json');
var addressSpace, namespace;
// Let's create an instance of OPCUAServer
var host = process.env.HOST
var port = 48000
var resourcePath = process.env.RESOURCEPATH

opcualog('HOSTNAME: ' + host)
opcualog('PORT: ' + port)
opcualog('RESOURCEPATH: ' + resourcePath)

const server = new opcua.OPCUAServer({
    alternateHostname: host,
    port: port, // the port of the listening socket of the server
    resourcePath: resourcePath, // this path will be added to the endpoint resource name
    buildInfo: {
        productName: "hbvu simple server",
        buildNumber: "7658",
        buildDate: new Date(2019, 9, 28)
    }
});

const addHatTags = () => {
    /**
     * returns TEMPERATURE
     * @return {double}
     */
    namespace.addVariable({
        componentOf: device,
        nodeId: "s=temperature", // a string nodeID
        browseName: "Temperature",
        dataType: "Double",
        value: {
            get: function () {
                opcualog('...........................................')
                opcualog(`value calculated for s=temperature: ${imudata.temperature}`);

                return new opcua.Variant({
                    dataType: opcua.DataType.Double,
                    value: imudata.temperature
                });
            }
        }
    });

    /**
     * returns HUMIDITY
     * @return {double}
     */
    namespace.addVariable({
        componentOf: device,
        nodeId: "s=humidity", // a string nodeID
        browseName: "Humidity",
        dataType: "Double",
        value: {
            get: function () {
                opcualog('...........................................')
                opcualog(`value calculated for s=humidity: ${imudata.humidity}`);
                return new opcua.Variant({
                    dataType: opcua.DataType.Double,
                    value: imudata.humidity
                });
            }
        }
    });

    /**
     * returns PRESSURE
     * @return {double}
     */
    namespace.addVariable({
        componentOf: device,
        nodeId: "s=pressure", // a string nodeID
        browseName: "Pressure",
        dataType: "Double",
        value: {
            get: function () {
                opcualog('...........................................')
                opcualog(`value calculated for s=pressure: ${imudata.pressure}`);
                return new opcua.Variant({
                    dataType: opcua.DataType.Double,
                    value: imudata.pressure
                });
            }
        }
    });

    /**
     * returns ACCELEROMETER
     * @return {double}
     */
    namespace.addVariable({
        componentOf: device,
        nodeId: "s=accel-x", // a string nodeID
        browseName: "Accelerometer X",
        dataType: "Double",
        value: {
            get: function () {
                opcualog('...........................................')
                opcualog(`value calculated for s=accel-x: ${imudata.accel.x}`);
                return new opcua.Variant({
                    dataType: opcua.DataType.Double,
                    value: imudata.accel.x
                });
            }
        }
    });
    namespace.addVariable({
        componentOf: device,
        nodeId: "s=accel-y", // a string nodeID
        browseName: "Accelerometer Y",
        dataType: "Double",
        value: {
            get: function () {
                opcualog('...........................................')
                opcualog(`value calculated for s=accel-y: ${imudata.accel.y}`);
                return new opcua.Variant({
                    dataType: opcua.DataType.Double,
                    value: imudata.accel.y
                });
            }
        }
    });
    namespace.addVariable({
        componentOf: device,
        nodeId: "s=accel-z", // a string nodeID
        browseName: "Accelerometer Z",
        dataType: "Double",
        value: {
            get: function () {
                opcualog('...........................................')
                opcualog(`value calculated for s=accel-z: ${imudata.accel.z}`);
                return new opcua.Variant({
                    dataType: opcua.DataType.Double,
                    value: imudata.accel.z
                });
            }
        }
    });

    /**
     * returns GYROSCOPE  
     * @return {double}
     */
    namespace.addVariable({
        componentOf: device,
        nodeId: "s=gyro-x", // a string nodeID
        browseName: "Gyro X",
        dataType: "Double",
        value: {
            get: function () {
                opcualog('...........................................')
                opcualog(`value calculated for s=gyro-x: ${imudata.gyro.x}`);
                return new opcua.Variant({
                    dataType: opcua.DataType.Double,
                    value: imudata.gyro.x
                });
            }
        }
    });
    namespace.addVariable({
        componentOf: device,
        nodeId: "s=gyro-y", // a string nodeID
        browseName: "Gyro Y",
        dataType: "Double",
        value: {
            get: function () {
                opcualog('...........................................')
                opcualog(`value calculated for s=gyro-y: ${imudata.gyro.y}`);
                return new opcua.Variant({
                    dataType: opcua.DataType.Double,
                    value: imudata.gyro.y
                });
            }
        }
    });
    namespace.addVariable({
        componentOf: device,
        nodeId: "s=gyro-z", // a string nodeID
        browseName: "Gyro Z",
        dataType: "Double",
        value: {
            get: function () {
                opcualog('...........................................')
                opcualog(`value calculated for s=gyro-z: ${imudata.gyro.z}`);
                return new opcua.Variant({
                    dataType: opcua.DataType.Double,
                    value: imudata.gyro.z
                });
            }
        }
    });

    /**
     * returns COMPASS
     * @return {double}
     */
    namespace.addVariable({
        componentOf: device,
        nodeId: "s=compass-x", // a string nodeID
        browseName: "Compass X",
        dataType: "Double",
        value: {
            get: function () {
                opcualog('...........................................')
                opcualog(`value calculated for s=compass-x: ${imudata.compass.x}`);
                return new opcua.Variant({
                    dataType: opcua.DataType.Double,
                    value: imudata.compass.x
                });
            }
        }
    });
    namespace.addVariable({
        componentOf: device,
        nodeId: "s=compass-y", // a string nodeID
        browseName: "Compass Y",
        dataType: "Double",
        value: {
            get: function () {
                opcualog('...........................................')
                opcualog(`value calculated for s=compass-y: ${imudata.compass.y}`);
                return new opcua.Variant({
                    dataType: opcua.DataType.Double,
                    value: imudata.compass.y
                });
            }
        }
    });
    namespace.addVariable({
        componentOf: device,
        nodeId: "s=compass-z", // a string nodeID
        browseName: "Compass Z",
        dataType: "Double",
        value: {
            get: function () {
                opcualog('...........................................')
                opcualog(`value calculated for s=compass-z: ${imudata.compass.z}`);
                return new opcua.Variant({
                    dataType: opcua.DataType.Double,
                    value: imudata.compass.z
                });
            }
        }
    });

    /**
     * returns FUSION
     * @return {double}
     */
    namespace.addVariable({
        componentOf: device,
        nodeId: "s=fusion-x", // a string nodeID
        browseName: "Fusion X",
        dataType: "Double",
        value: {
            get: function () {
                opcualog('...........................................')
                opcualog(`value calculated for s=fusion-x: ${imudata.fusionPose.x}`);
                return new opcua.Variant({
                    dataType: opcua.DataType.Double,
                    value: imudata.fusionPose.x
                });
            }
        }
    });
    namespace.addVariable({
        componentOf: device,
        nodeId: "s=fusion-y", // a string nodeID
        browseName: "Fusion Y",
        dataType: "Double",
        value: {
            get: function () {
                opcualog('...........................................')
                opcualog(`value calculated for s=fusion-y: ${imudata.fusionPose.y}`);
                return new opcua.Variant({
                    dataType: opcua.DataType.Double,
                    value: imudata.fusionPose.y
                });
            }
        }
    });
    namespace.addVariable({
        componentOf: device,
        nodeId: "s=fusion-z", // a string nodeID
        browseName: "Fusion Z",
        dataType: "Double",
        value: {
            get: function () {
                opcualog('...........................................')
                opcualog(`value calculated for s=fusion-z: ${imudata.fusionPose.z}`);
                return new opcua.Variant({
                    dataType: opcua.DataType.Double,
                    value: imudata.fusionPose.z
                });
            }
        }
    });
}

const addTags = () => {
    opcualog('# Adding TAGS')
    // declare a new object
    device = namespace.addObject({
        organizedBy: addressSpace.rootFolder.objects,
        browseName: "Pi2WithHat"
    });

    addHatTags();

    for (var i = 0; i < tags.length; i++) {

        let nodeId = tags[i].nodeId;
        let browseName = tags[i].browseName;
        let dataType = tags[i].dataType;
        let func = tags[i].func;
        let seed = 0
        if (tags[i].hasOwnProperty(seed))
            seed = tags[i].seed

        let value = 0;

        namespace.addVariable({
            componentOf: device,
            nodeId: nodeId, // a string nodeID
            browseName: browseName,
            dataType: dataType,
            value: {
                get: function () {
                    //var seed = 10 + new Date() / 10000.0;
                    opcualog('...........................................')
                    var idx = tags.findIndex(i => i.nodeId === nodeId);
                    if (tags[idx].hasOwnProperty('func')) {
                        value = eval(func)
                    }
                    opcualog(`value calculated for ${nodeId}: ${value}`);
                    return new opcua.Variant({
                        dataType: dataType,
                        value: value
                    });
                },
                set: function (variant) {
                    if (tags[idx].hasOwnProperty('storedValue')) {
                        opcualog('...........................................')
                        opcualog(`value set for ${nodeId}: ${variant.value}`);
                        tags[idx].storedValue = parseInt(variant.value);
                        return opcua.StatusCodes.Good;
                    } else return opcua.statusCodes.Bad
                }
            }
        });
    }
}

const construct_my_address_space = () => {
    addressSpace = server.engine.addressSpace;
    namespace = addressSpace.getOwnNamespace();
}

const g = () => {
    const endpointUrl = server.endpoints[0].endpointDescriptions()[0].endpointUrl;
    opcualog(`Server ${endpointUrl} is now listening ... ( press CTRL+C to stop)`);
}

const f = () => {
    opcualog("initialize server now")
    construct_my_address_space();
    addTags();
    server.start(g)
}

server.initialize(f)