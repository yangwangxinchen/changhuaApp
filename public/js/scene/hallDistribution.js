MakerJS.hallDistribution=function(){

var sceneMeshs=[]
var engine
var glass_material=new THREE.MeshBasicMaterial({
    color: "#778899",
    depthTest: true,
    opacity: 0.3,
    transparent: true,
});

this.initSceneMeshs=function(_engine,_meshsName){
    engine=_engine

    for(var i in _meshsName){

        let obj= engine.scene.getObjectByName(_meshsName[i])
        sceneMeshs.push(obj)
    }

init()

}

function init(){
    getMesh()
    setGlassMaterial();
    setMonitorMaterial()
    setMonitorVisibel(false)

    engine.nodeSelection.addEventListener('choose',eveChoose)
}

var meshDic
var cone
function getMesh(){
    
    meshDic={}
    for(var i in sceneMeshs){
        meshDic[sceneMeshs[i].name]=sceneMeshs[i]
    }

    cone=meshDic["视锥"]
}

function setGlassMaterial(){
    var glass=engine.scene.getObjectByName('玻璃')
    glass.material=glass_material
    glass.visible=false

}

function setMonitorMaterial(){
    // var cone=engine.scene.getObjectByName('视锥')
    cone.material=engine.FilterMesh.monitoring_material;

}

function setMonitorVisibel(state){
    cone.visible=state
    if(state){
        // engine.animateCamera(engine.camera.position,engine.controls.target,{x:78,y:270,z:100},{x:78,y:0,z:100})
    }
  
}

function eveChoose(e){
    var nameNode
    if(e.content instanceof THREE.Mesh) nameNode=e.content.name

    if(nameNode=="柜1"){
        // engine.effects.addEdgesObject(meshDic[nameNode])
        engine.animateCamera(engine.camera.position,engine.controls.target,{x:150,y:-330,z:200},{x:150,y:0,z:200})
       
    }else if(nameNode=='柜2'){
        // engine.effects.addEdgesObject(meshDic[nameNode])
        engine.animateCamera(engine.camera.position,engine.controls.target,{x:0,y:-330,z:200},{x:0,y:0,z:200})
    }else if(nameNode=='柜3'){
        engine.effects.addEdgesObject(meshDic[nameNode])
        engine.animateCamera(engine.camera.position,engine.controls.target,{x:-150,y:-330,z:200},{x:-150,y:0,z:200})
    }

}

}