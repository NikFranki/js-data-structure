class Fibonaci {
    exec() {
        const fibonaci = [];
        fibonaci[0] = 1;
        fibonaci[1] = 1;

        for (let i = 2; i < 20; i++) {
            fibonaci[i] = fibonaci[i - 1] + fibonaci[i - 2];
        }

        console.log(fibonaci);
    }
}
new Fibonaci().exec();