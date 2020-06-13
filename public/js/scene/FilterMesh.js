
MakerJS.FilterMesh=function(engine){

this.engine=engine;
var _this=this;
this.world_name;


this.distributionRoomMeshs=[];
this.exhibitionHallMeshs=[];


this.get_meshArray = function (meshPath,meshArray) {
    //get relative path   
    var index1 = meshPath.lastIndexOf("/");
    var index3 = meshPath.lastIndexOf(".");
    var meshName = meshPath.substring(index1+1, index3);
    // console.log(meshName)
    meshArray.push(meshName)
}

//根据world文件名赋值数组  在world 调用
this.set_meshArray=function(world_name,meshPath){
    if(this.world_name==undefined){
        this.world_name=world_name
        // console.log(this.world_name)
    }
    switch(world_name) {
        case '配电房':
            this.get_meshArray(meshPath,this.distributionRoomMeshs)
           break;
        case '展厅':
            this.get_meshArray(meshPath,this.exhibitionHallMeshs)
           break;
          
        default:
           break;
   } 
}




this.engine.world.addEventListener('loadEnd', loadEnd)
//关卡加载完毕
function loadEnd(){

    switch(this.world_name) {
        case '配电房':
            this.engine.camera.position.set(0,-500,200)
            var distri=new MakerJS.distributionRoom()
            console.log(_this.distributionRoomMeshs)
            distri.initSceneMeshs(engine,_this.distributionRoomMeshs)
        break;
        case '展厅':
            this.engine.camera.position.set(0,-100,200)
            console.log(_this.exhibitionHallMeshs)
            var exhib=new MakerJS.exhibitionHall(engine)
            exhib.init(_this.exhibitionHallMeshs)
        break;
        case '展厅配电房':
            this.engine.camera.position.set(0,-200,200)
            console.log("展厅配电房")
        break;
        
        default:
        break;
      } 
}



// // gltf模型加载
//  var loader = new THREE.GLTFLoader();
//     loader.load('mesh/gltfLight/shapan.gltf', function (gltf) {
//         loadMesh = gltf.scene;
//         // loadMesh.scale.set(100,100,100);
//         // loadMesh.position.set(0,0,15)
//         // loadMesh.rotation.set(Math.PI/2,Math.PI/2,Math.PI)

//         // engine.scene.getObjectByName("展台01").add(loadMesh)
        

//         // _this.engine.scene.add(loadMesh);
//     });



}


