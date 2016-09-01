/**
 * Created by Gnet on 2016/9/1.
 */
//导入工具包
var gulp = require('gulp'),
    less = require('gulp-less');
//定义less编译任务
gulp.task('less',function(){
    gulp.src('src/less/style.less')//该任务针对的文件
        .pipe(less())//该任务调用
        .pipe(gulp.dest('src/css'))//将会在src/css下生成style.css
});
gulp.task('default',['less', 'elseTask']); //定义默认任务 elseTask为其他任务，该示例没有定义elseTask任务

//gulp.task(name[, deps], fn) 定义任务  name：任务名称 deps：依赖任务名称 fn：回调函数
//gulp.src(globs[, options]) 执行任务处理的文件  globs：处理的文件路径(字符串或者字符串数组)
//gulp.dest(path[, options]) 处理完后文件生成路径