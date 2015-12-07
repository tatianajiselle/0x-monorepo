var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var ts = require("typescript");
var index_1 = require("../../models/index");
var components_1 = require("../components");
var index_2 = require("../factories/index");
var SignatureConverter = (function (_super) {
    __extends(SignatureConverter, _super);
    function SignatureConverter() {
        _super.apply(this, arguments);
        this.supports = [
            145,
            150,
            171,
            172
        ];
    }
    SignatureConverter.prototype.convert = function (context, node) {
        var scope = context.scope;
        if (scope instanceof index_1.DeclarationReflection) {
            var name = scope.kindOf(index_1.ReflectionKind.FunctionOrMethod) ? scope.name : '__call';
            var signature = index_2.createSignature(context, node, name, index_1.ReflectionKind.CallSignature);
            if (!scope.signatures)
                scope.signatures = [];
            scope.signatures.push(signature);
        }
        return scope;
    };
    SignatureConverter = __decorate([
        components_1.Component({ name: 'node:signature-call' }), 
        __metadata('design:paramtypes', [])
    ], SignatureConverter);
    return SignatureConverter;
})(components_1.ConverterNodeComponent);
exports.SignatureConverter = SignatureConverter;