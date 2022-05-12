function  pay(acountId,amount) {
    console.log(`paying ${amount}Lei to ${acountId}`)
  }

  function watchDog(context,target) {
    let oldTarget = context[target.name]
    context[target.name] = function () {
        console.info(`LOG: function "${oldTarget.name}" begin`)
        let result = oldTarget.bind(context, ...arguments)()
        console.info(`LOG: function "${oldTarget.name}" end`)
       return result
    }

}

watchDog(window, pay)
pay(123456, 100.00)

watchDog(window, parseInt)
parseInt('3.14call')
