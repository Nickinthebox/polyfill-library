// use "Int8Array" as a proxy for support of "TypedArray" subclasses
'Int8Array' in self && 'toLocaleString' in self.Int8Array.prototype
