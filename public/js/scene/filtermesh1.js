
MakerJS.FilterMesh=function(engine){

    this.engine=engine;
    var _this=this;
    this.world_name;
    
    
    this.distributionRoomMeshs=[];
    this.exhibitionHallMeshs=[];
    
    this.solid_material = new THREE.MeshBasicMaterial({
        color: "#4169E1",
        // emissive :0x4169E1,
        polygonOffset: true,
        //polygonOffsetFactor: 1, // positive value pushes polygon further away
        polygonOffsetUnits: 1,
        depthTest: true,
        opacity: 0.5,
        transparent: true,
    });
    
    this.lampshade_material = new THREE.MeshLambertMaterial({
        color: 0x000000,
        // emissive :0xFDE951,
        polygonOffset: true,
        //polygonOffsetFactor: 1, // positive value pushes polygon further away
        polygonOffsetUnits: 1,
        depthTest: true,   //启用 深度遮挡
        opacity: 0.7,
        transparent: true,
    });
    
    this.monitoring_material = new THREE.MeshBasicMaterial({
        color: "#1E90FF",
        // emissive :0xFDE951,
        polygonOffset: true,
        //polygonOffsetFactor: 1, // positive value pushes polygon further away
        polygonOffsetUnits: 1,
        depthTest: true,
        opacity: 0.3,
        transparent: true,
    });
    
    this.lampClose_material = new THREE.MeshLambertMaterial({
        color: 0xffffff,
        // emissive :0xffff00,
        polygonOffset: true,  
        //polygonOffsetFactor: 1, // positive value pushes polygon further away
        polygonOffsetUnits: 1,
        depthTest: true,
        opacity: 0.7,
        transparent: true,
    });
    
    this.lampOpen_material = new THREE.MeshLambertMaterial({
        color: 0xffffff,
        emissive :0xffff00,
        polygonOffset: true,     //多边形偏移
        polygonOffsetFactor: 1, // positive value pushes polygon further away
        polygonOffsetUnits: 1,
        depthTest: false,
        opacity: 1,
        transparent: true,
        lightMapIntensity:2
    });
    
    this.glass_material = new THREE.MeshBasicMaterial({
        color: "#778899",
        // emissive :0xFDE951,
        polygonOffset: true,
        //polygonOffsetFactor: 1, // positive value pushes polygon further away
        polygonOffsetUnits: 1,
        depthTest: true,
        opacity: 0.3,
        transparent: true,
    });
    
    //体积光效果
    var texture_alpha = new THREE.TextureLoader().load( 'mesh/gltfLight/alpha.png' );
    // 使用透明纹理进行材质创建alphaMap: texture
    var volumeLight_material = new THREE.MeshPhongMaterial( 
        {
             alphaMap: texture_alpha, 
             color:0xADD8E6 ,
             emissive:0x888888, 
             transparent:true, opacity:0.3
        });
    
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
    
    
    
    // this.change_mesh_color=function(meshArray)
    // {
    //     if(Array.isArray(meshArray)){
    //      for(var i=0;i<meshArray.length;i++)
    //          {
    //             let nameNode=this.engine.scene.getObjectByName(meshArray[i])
    //             let mats=nameNode.material
    //             // console.log(mats)
    //             if(Array.isArray(mats)){
    //                 for(var j=0;j<mats.length;j++)
    //                 {
    //                     // mats[j].color.set(0xff0000);
    //                     mats[j]=this.solid_material;
    //                 }
    //             }else{
    //                 nameNode.material=this.solid_material;
    //             }
               
    //          }
    //         }
            
    // }
    
    
    
    // //设备显示隐藏   open: 布尔类型
    // function switch_device(lights,open){
    
    //     let device;
    //     for(var li in lights){
    //         device=_this.engine.scene.getObjectByName(lights[li]) 
    //         device.visible=open;
    //     }
    // }
    
    // //设备开关状态
    // function device_on_off(devices,open){
        
    //     // if(open){ 
    //     //     engine.effects.line_material.opacity=0
    //     // }
    //     // else{
    //     //     engine.effects.line_material.opacity=1
    //     // }
    
    //     for(var de in devices){
    //         device=_this.engine.scene.getObjectByName(devices[de]) 
    //         if(open){
    //             device.material=_this.lampOpen_material;
    //             engine.blooms.setEnable(true)
    //             engine.blooms.addBloomObjects(device)
    //         }else{
    //             device.material=_this.lampClose_material;  
    //             engine.blooms.setEnable(false)
    //             engine.blooms.removeBloomObjects(device)
    //         }
    //     }
    // }
    
    // var volumeLights=[];
    // //体积光模型
    // function volumeLights_visible(visible){
    //     for(var i in volumeLights){
    //         volumeLights[i].visible=visible
    //     }
    // }
    
    
    // //筒灯灯罩
    // var cir_light_state=false;
    // // var cir_lights=[];
    // this.circle_light=function(){
    //     cir_light_state=!cir_light_state;
        
    // }
    
    
    // //监控
    // var monitorings=[];
    // var monitorings_state=false;
    // this.monitorings_show=function(state){
    //     monitorings_state=state
    //     switch_device(monitorings,state)
    // }
    
    
    
    // //灯
    // var inside_cir_light_state=false;
    // var inside_cir_lights=[]
    // this.switchRoomLamp=function(state){
    //     if(inside_cir_lights.length==0) return
    //     inside_cir_light_state=state
    //     device_on_off(inside_cir_lights,state)
    //     volumeLights_visible(state)
    //     setSandFloorColor(state)
    // }
    
    
    
    
    // //更改材质   material three 材质类型
    // function  change_mesh_material(meshName,material){
    //   let meshNode= _this.engine.scene.getObjectByName(meshName)
    //   meshNode.material=material
    // }
    
    
    // //外墙轮廓效果
    // function setWallEdges(){
    //      var walls=[]
    //      var wall_inside=_this.engine.scene.getObjectByName('办公室外框')
    //      var wall_out=_this.engine.scene.getObjectByName('5楼墙')
    //      walls.push(wall_inside,wall_out)
    //      change_mesh_material('办公室外框',_this.solid_material)
    //      change_mesh_material('5楼墙',_this.solid_material)
    //      //边缘线
    //     //  engine.effects.setEdgesObjects(walls)
    //     //线框
    //     engine.effects.setWireframeObjects(walls)
    //     // engine.effects.setSolidObjects(walls)
    //     // engine.effects.setOutlineObjects(walls)
    //     setSandFloorColor(false)
    // }
    
    
    // function setSandFloorColor(state){
    
    //    var sands=[]
    //    var sand= engine.scene.getObjectByName('沙盘')
    //    sands=sand.children
    //    defaultMat=sands[0].material
    //     if(state==true){
    //         sands[4].material=_this.lampOpen_material
    //     }else{
    //         sands[4].material=defaultMat
    //     }
    // }
    
    // function setGlass(){
    
    //     let glass=[]
    //     let glass_board= engine.scene.getObjectByName('对象031')
    //     let glass_door= engine.scene.getObjectByName('对象030')
        
    //     glass.push(glass_door,glass_board)
    //     // console.log(glass_door)
        
    //     for(var i in glass){
    //         glass[i].material=_this.glass_material
    //     }
    
    // }
    
    // var isLoading=true;
    // var airSwitchs=[]
    
    // //初始化
    // this.init=function(){
    
    //    //遍历场景模型
    //     for(var ex in this.exhibitionHallMeshs)
    //     {
    //         let meshName=this.exhibitionHallMeshs[ex]
    //         if(meshName.indexOf("方灯外壳")!=-1){
    //             change_mesh_material(meshName,_this.lampshade_material)
    //         }
    
    //         if(meshName.indexOf=='圆灯外壳'){
    //             // cir_lights.push(meshName);
    //             change_mesh_material(meshName,_this.lampshade_material)
    //         }
    
    //         if(meshName.indexOf("摄像机视野")!=-1||meshName.indexOf("摄像机视锥")!=-1){
    //             monitorings.push(meshName);
    //             change_mesh_material(meshName,_this.monitoring_material)
    //         }
    
    //         if(meshName.indexOf("方灯灯管")!=-1){
    //             inside_cir_lights.push(meshName);
    //             change_mesh_material(meshName,_this.lampClose_material)
    //         }
    
    //         if(meshName.indexOf("方灯体积光")!=-1){
    //             let mesh= engine.scene.getObjectByName(meshName)
    //             mesh.material=volumeLight_material 
    //             volumeLights.push(mesh);
    //         }
    //         if(/空开\d/.test(meshName)){
    //             let mesh= engine.scene.getObjectByName(meshName)
    //             // change_mesh_material(meshName,_this.solid_material)
    //             airSwitchs.push(mesh)
    //             // break;
    //         }
    
    //     }
    //     console.log(airSwitchs)
    //     engine.effects.setOutlineObjects(airSwitchs)
       
    //     getMqtt()
    //     setWallEdges()
    //     volumeLights_visible(false);
    //     switch_device(monitorings,false)
    //     // label_2d()
        
    //     // createSprite();
    //     isLoading=false;
    //     wallPosition=_this.engine.scene.getObjectByName('办公室外框').position
    //     monitorRotate()
    //     setGlass()
    // } 
    
    // function addNormalLine(x1,y1,z1,x2,y2,z2){
    //     const p1 =  new THREE.Vector3(x1,y1,z1)
    //     const p2 =  new THREE.Vector3(x2,y2,z2)
    //     const lineGeo = new THREE.Geometry()
    //     lineGeo.vertices.push(p1,p2)
    //     lineGeo.colors.push(new THREE.Color("#fff")) //
    //     const line = new  THREE.Line(lineGeo,new THREE.LineBasicMaterial({
    //         linewidth:1,//window无效
    //         // vertexColors: true,//使用顶点渐变着色
    //     }))
    
    //     const point=new THREE.Mesh(new THREE.SphereBufferGeometry( 0.15, 16, 8 ),new THREE.LineBasicMaterial({color:"#007F7F",transparent:true,opacity:0.8}))
    //     point.position.set(x1,y1,z1)
    //     engine.scene.add(line)
    //     engine.scene.add(point)
    //     // return line
    // }
    
    
    // var temp='',humi='',co2=''
    // //关联数据
    // function getMqtt(){
    
    //      var client=engine.getMqtt()
         
    //      client.on('message',function (topic, message) {
    //         // console.log("topic:",topic.toString())
           
    //         const deviceName=topic.substring(13)
    //         console.log(deviceName+message.toString())
    //         if(deviceName=="Humi_VAL"){
    //            humi=message.toString()
    //         }else if(deviceName=="CO2_VAL"){
    //            co2=message.toString()
    //         }else if(deviceName=="Temp_VAL"){
    //            temp=message.toString()
    //            console.log("温度:"+temp)
    //         }
    //         //test() 方法用于检测一个字符串是否匹配某个模式
    //         // if(!/Room/.test(topic)) return
    //         //1开 0关
    //         // console.log(topic.substring(13)+":"+message.toString())
    //     if(/\"SwitchOn\": \d/.test(message)){
    //         let value=message.toString().match(/\"SwitchOn\": \d/)[0].match(/\d/)[0]
    //         switch(deviceName){
    //             case 'Room_S_Lamp':
    //                 if(value=="1"){
    //                    _this.switchRoomLamp(true);
    //                 }else{
    //                    _this.switchRoomLamp(false);
    //                 }
    //                 break;
    //             case 'Room_AirC_1':
    //                 if(value=="1"){
    //                    switchAirC(true,1);
    //                 }else{
    //                     switchAirC(false,1);
    //                 }
    //                 break;
    //             case 'Room_AirC_2':
    //                 if(value=="1"){
    //                    switchAirC(true,0);
    //                 }else{
    //                     switchAirC(false,0);
    //                 }
    //                 break;
    //             default:
    //                 break;
        
    //            }
    //     }
    
    //      })
    
    // }
    
    // var air_state
    // //空调
    // function switchAirC(state,num){
    //     if(airs.length==0) return
    //     //1 左边 0右边
    //     air_state=state
    //     // for(var i in airs){
    //     //  airs[i].visible=state;
    //     // }
    //     airs[num].visible=state
       
    // }
    
    // var airs=[]
    // //1.uv贴图修改偏移
    // const loader_t  = new THREE.TextureLoader()
    // var texture
    // loader_t.load("textures/arrow.png",t =>{ 
    //     texture = t
    //     texture.wrapS = THREE.RepeatWrapping;
    //     texture.wrapT = THREE.RepeatWrapping;
    //     texture.repeat.set(4,4)
    //     var plane =  new THREE.Mesh(new THREE.PlaneBufferGeometry(10,10),new THREE.MeshBasicMaterial({
    //         // color:"#f00",
    //         map:texture,
    //         transparent:true,
    //         side:THREE.DoubleSide,
    //         opacity:0.5,
    //     }))
    //     plane.position.set(65,-1.5,45)
    //     plane.rotateY(Math.PI/2)
    
    //     var plane1=plane.clone()
    //     plane1.position.set(-42,5.5,45)
    //     airs.push(plane,plane1)
    //     // engine.scene.add(plane,plane1)
    // })
    
    // //2.着色器中uniform变量更新 每帧更改x y的偏移
    
    
    // function createSprite(){
    //         //精灵
    //         var textured = new THREE.TextureLoader().load("dropBg.png");
    //         var spriteMaterial = new THREE.SpriteMaterial({
    //         // color: 0xffffff,
    //         map: textured
    //         });
    
    //         var group=new THREE.Group();
          
    //         var obj=_this.engine.scene.getObjectByName('方灯体积光15')
    //         for(var i=0;i<5;i++)
    //         {
    //             var sprite = new THREE.Sprite(spriteMaterial);
    //             sprite.position.set(obj.position.x,obj.position.y+i*17,obj.position.z+5)
    //             // console.log(sprite);
    //             sprite.scale.x = 10;
    //             sprite.scale.y = 5; 
    //             group.add(sprite)
    //         }
            
    //         engine.scene.add(group);
           
    // }
    
    // function create2DLabel(){
    
    // }
    
    // //样式 类似billboard 
    // function label_2d(){
    //     var obj=_this.engine.scene.getObjectByName('空调2')
    //     var objDiv = document.createElement( 'div' );
    //     objDiv.className = 'label';
    //     objDiv.textContent = '室内圆灯';
      
    //     var objLabel = new THREE.CSS2DObject( objDiv );
       
    //     obj.add( objLabel );
    //     labelRenderer = new THREE.CSS2DRenderer();
    //     labelRenderer.setSize( window.innerWidth, window.innerHeight );
    //     labelRenderer.domElement.style.position = 'absolute';
    //     labelRenderer.domElement.style.top = '0px';
    
    //     document.body.appendChild( labelRenderer.domElement );
    //     _this.engine.controls = new THREE.OrbitControls(_this.engine.camera, labelRenderer.domElement);
    
    // }
    
    
    // //通过样式实现3d效果
    // var css3DRenderer
    // var circuitCount=10;
    // var circuitRun=2
    // var capacity=1000
    // function label_3d(){
     
    //      //渲染
    //      css3DRenderer = new THREE.CSS3DRenderer()
    //      css3DRenderer.setSize( engine.width,engine.height )
    //      css3DRenderer.domElement.style.position = 'absolute'
    //      css3DRenderer.domElement.style.top = 0
    //      css3DRenderer.domElement.style.pointerEvents = "none"
    //      document.body.appendChild(css3DRenderer.domElement );
    
    //     //3d物体载体
    //     // document.getElementById("box2").innerText="温度:"+temp+"℃\n"+"湿度:"+humi+"%\n" +"CO2:"+co2+"ppm" 
    //     // const label3d = new THREE.CSS3DObject( document.getElementById("box2") )
    //     // label3d.position.set(100,-5,14)
    //     // label3d.rotation.set(0,-Math.PI/2,-Math.PI/2)
    //     // label3d.scale.set(0.05,0.05,0.05)
    
    //     // document.getElementById("box3").innerText= "智能配电箱\n"+"回路总数:"+circuitCount+"条\n"+"回路运行:"+circuitRun+"条\n"+"总容量:"+capacity+"kWA"
    //     // var label3d2=   _this.css3DObjectCreate(document.getElementById("box3"))
    //     // label3d2.position.set(-84,5,25)
    //     // label3d2.rotation.set(0,Math.PI/2,Math.PI/2)
    //     // addNormalLine( -84,5,20,-84,5,24)
    
    //     // engine.scene.add(label3d)
        
    // }
    
    
    
    
    // this.css3DObjectCreate=function(div){
     
    //  if(!css3DRenderer) console.error('css3DRenderer 未定义')
    //  var label3d = new THREE.CSS3DObject( div)
    //  label3d.scale.set(0.05,0.05,0.05)
    //  engine.scene.add(label3d)
    //  return  label3d
    
    // }
    
    // // document.getElementById("box3").onclick=()=>{console.log("box333333333333")}
    
    // this.cameraFly=function(_name,_x,_y,_z,time){
    //     var nameNode=_this.engine.scene.getObjectByName(_name)
    //     var controlPos =nameNode.getWorldPosition()
    //     // console.log(controlPos)
    //     var targetPos={x:_x,y:_y,z:_z }
    //     // var targetPos={x:0,y:10,z:10 }
    //     var t=engine.cameraFly(targetPos,controlPos,time)
    //     t.start()
    //     t.onComplete(function(){ 
    //         // engine.camera.rotation.set(0,0,180*(Math.PI/180))
    //     })
    // }
    
    // function cameraFlyHome(){
    //     engine.camera.position.set(0,-100,200)
    //     engine.controls.target.set(0,0,1)
    // }
    
    
    // function monitorRotate(){
    //     var monitor=_this.engine.scene.getObjectByName('摄像头')
    //         var yaw=Math.PI/180;
    //         var rate=30
    //         var angle=yaw*rate;
    
    //         setInterval(() => {
    //             if( monitor.rotation.z>1.37){
    //                 angle=-yaw*rate
    //                 }else if(monitor.rotation.z<-1.37){
    //                 angle=yaw*rate
    //                 }
    //                 monitor.rotation.set(0,0,monitor.rotation.z+angle)
    //         }, 2500);
            
    //  }
    
    // var labelRenderer
    // var wallPosition;
    // var a=0
    // //每帧检测
    // this.update=function(){
    //     if(isLoading==false){
    //         // if(labelRenderer){
    //         //   // labelRenderer.render(this.engine.scene, this.engine.camera );
    //         // }
           
    //         if(css3DRenderer){
    //             // a++;
    //             css3DRenderer.render(this.engine. scene, this.engine.camera );
    //             document.getElementById("box2").innerText="温度:"+temp+"℃\n"+"湿度:"+humi+"%\n" +"CO2:"+co2+"ppm" 
    //         }
            
    //         if(texture){
    //             texture.offset.x -= 0.05
    //             // texture.offset.y += 0.001
    //         }
               
    //     }
    // }
    
    // this.back_cesium=function(){
    //     //console.log('返回上个页面')
    //     //window.location.href='http://localhost:8080/Apps/Sandcastle/gallery/my_test.html';
    // }
    
    // //功能按钮
    // const btn_struct=document.getElementById('yx-button')
    // btn_struct.onclick=cameraFlyHome;
    
    // //按钮
    // const btn_back=document.getElementById('yx-button1')
    // btn_back.onclick=()=>{_this.switchRoomLamp(!inside_cir_light_state)};
    
    // //功能按钮
    // const btn_2=document.getElementById('yx-button2')
    // if(btn_2)btn_2.onclick=()=>{_this.monitorings_show(!monitorings_state)}
    
    
    // //键盘按键测试
    // document.addEventListener('keydown',myKeyDown)
    // function myKeyDown(id) {
    //     switch(id.key) {
    //         case '1':
    //             switchAirC(!air_state,0)
    //             switchAirC(air_state,1)
    //            break;
    //         case '2':
    //             _this.switchRoomLamp(!inside_cir_light_state)
    //            break;
    //         case '3':
    //             _this.monitorings_show(!monitorings_state)
    //            break;
    //         case '4':
    //             _this.cameraFly('展台01',60,2,20,3)
    //            break;
    //         case '5':
    //             _this.cameraFly('大屏',7,20,20,3)
    //            break;
    //         case '6':
    //             _this.cameraFly('电柜1',-60,-2,20,3)
    //            break;   
    //         default:
    //            break;
    //     } 
    // }
    
    // this.engine.nodeSelection.addEventListener('choose',function(e){
    
    //     var nameNode;
    //     if(e.content instanceof THREE.Mesh)nameNode=e.content.name
    
    //     if(nameNode=="沙盘"||nameNode=="展台01"){
    //         _this.cameraFly(nameNode,60,2,16,3)
    //     }else if(nameNode=="大屏"){
    //         _this.cameraFly(nameNode,7,20,16,3)
    //     }else if(nameNode=="电柜0"||nameNode=="电柜1"||nameNode=="电柜2"){
    //         _this.cameraFly(nameNode,-60,-2,16,3)
    //     }else if(nameNode=="空开1"||nameNode=="空开2"){
    //         _this.engine.scene.getObjectByName(nameNode).material=_this.solid_material
    //     }
    
    // })
    
    
    // this.engine.addEventListener('update',()=>{this.update()})
    
    
    this.engine.world.addEventListener('loadEnd', loadEnd)
    //关卡加载完毕
    function loadEnd(){
    
        // label_3d();
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
                // _this.init()
                var exhib=new MakerJS.exhibitionHall(engine)
                exhib.init(_this.exhibitionHallMeshs)
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
    
    
    