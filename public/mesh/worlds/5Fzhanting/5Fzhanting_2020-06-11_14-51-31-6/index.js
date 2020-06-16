var fs = require('fs');

var PATH = './meshes'; // 目录

//  遍历目录得到文件信息
function walk(path, callback) {
    var files = fs.readdirSync(path);
 
    files.forEach(function(file){
        if (fs.statSync(path + '/' + file).isFile()) {
            callback(path, file);
        }
    });
}

// 修改文件名称
function rename (oldPath, newPath) {
    fs.rename(oldPath, newPath, function(err) {
        if (err) {
            throw err;
        }
    });
}

// 运行
walk(PATH, function (path, fileName) {
    var oldPath = path + '/' + fileName // 源文件路径

    var newPath;
    if(fileName.indexOf('方灯灯管')!=-1){
        newPath = path + '/'+ 'fangdengdengguan'+fileName.substring(4) // 新路径
        // console.log(newPath)
        rename(oldPath, newPath);
    }else if(fileName.indexOf('方灯体积光')!=-1){
        newPath = path + '/'+ 'fangdengtijiguang'+fileName.substring(5) // 新路径
        // console.log(newPath)
        rename(oldPath, newPath);

    }
    else if(fileName.indexOf('方灯外壳')!=-1){
        newPath = path + '/'+ 'fangdengwaike'+fileName.substring(4) // 新路径
        // console.log(newPath)
        rename(oldPath, newPath);

    }else if(fileName.indexOf('开关')!=-1){
        newPath = path + '/'+ 'kaiguan'+fileName.substring(2) // 新路径
        // console.log(newPath)
        rename(oldPath, newPath);

    }else if(fileName.indexOf('圆灯灯管')!=-1){
        newPath = path + '/'+ 'yuandengdengguan'+fileName.substring(4) // 新路径
        // console.log(newPath)
        rename(oldPath, newPath);

    }else if(fileName.indexOf('圆灯外壳')!=-1){
        newPath = path + '/'+ 'yuandengwaike'+fileName.substring(4) // 新路径
        // console.log(newPath)
        rename(oldPath, newPath);

    }
    

    
});