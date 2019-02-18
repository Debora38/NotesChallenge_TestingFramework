function Testing() {

}

  Testing.prototype.EqualTo = function(program, matcher) {
    if (program === matcher) {
      console.log("Success")
    } else {
      throw new Error ("Failed Test")
    }
  }
