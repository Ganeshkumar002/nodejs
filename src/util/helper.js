const getInfo ={
    name: "lithium",
    week: "W3D5",
    topic: "Topic node js Topic -- how to create module and export it. "
};

function getBatchInfo () {
    console.log(
        `Batch name ${getInfo.name}, current  day ${getInfo.week }, ${getInfo.topic }`

    );
    const today = new Date ();
    const day = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
     

    console.log(day);
    console.log(month);
    console.log(year);

} 

module.exports.getBatchInfo = getBatchInfo;