function receivesAFunction(cb) {
    cb();
}

function returnsANamedFunction() {
    function hello() {
        console.log('Hello');
    }
    return hello;
}

function returnsAnAnonymousFunction() {
    return () => {
        console.log('Hello');
    }
}