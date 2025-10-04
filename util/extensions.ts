
Object.defineProperty(String.prototype, 'uncapitalize', {
  value: function() {
    return this.charAt(0).toLowerCase() + this.slice(1);
  },
  enumerable: false
});
