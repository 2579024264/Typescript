
// 一、TypeScript 编译
    // JavaScript 的运行环境（浏览器和 Node.js）不认识 TypeScript 代码。所以，TypeScript 项目要想运行，必须先转为 JavaScript 代码，这个代码转换的过程就叫做“编译”（compile）。

    // TypeScript 官方没有做运行环境，只提供编译器。编译时，会将类型声明和类型相关的代码全部删除，只留下能运行的 JavaScript 代码，并且不会改变 JavaScript 的运行结果。

    // 因此，TypeScript 的类型检查只是编译时的类型检查，而不是运行时的类型检查。一旦代码编译为 JavaScript，运行时就不再检查类型了。``

// 二、TypeScript 编译参数
    // --outFile 如果想将多个 TypeScript 脚本编译成一个 JavaScript 文件，使用--outFile参数
    // tsc file1.ts file2.ts --outFile app.js

    // --outDir 编译结果默认都保存在当前目录，--outDir参数可以指定保存到其他目录
    // tsc app.ts --outDir dist  这个命令会在dist子目录下生成app.js

    // --target 为了保证编译结果能在各种 JavaScript 引擎运行，tsc 默认会将 TypeScript 代码编译成很低版本的 JavaScript，即3.0版本（以es3表示）。这通常不是我们想要的结果。
    // 这时可以使用--target参数，指定编译后的 JavaScript 版本。建议使用es2015，或者更新版本。

// 三、TypeScript 编译失败
    // 编译过程中，如果没有报错，tsc命令不会有任何显示。所以，如果你没有看到任何提示，就表示编译成功了。
        
    // 如果编译报错，tsc命令就会显示报错信息，但是这种情况下，依然会编译生成 JavaScript 脚本。
    
    // 如果希望一旦报错就停止编译，不生成编译产物，可以使用--noEmitOnError参数 tsc app.ts --noEmitOnError 该命令在报错后，就不会生成app.js

// 四、tsconfig.json
    // TypeScript 允许将tsc的编译参数，写在配置文件tsconfig.json。只要当前目录有这个文件，tsc就会自动读取，所以运行时可以不写参数。