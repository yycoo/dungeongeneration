/**
 * Text Element constructor
 *
 * @class Roguelike.UI.Element.Text
 * @classdesc An UI text element
 * Inherits from Roguelike.UI.Element
 *
 * @param {Roguelike.Vector2} position - The position of the previous container that called this render function
 * @param {String} text - The text that is being displayed
 * @param {String} color - (optional) The color of the text. In RGBA format: rgba(255, 255, 255, 1)
 * @param {Number} fontSize - (optional) The size of the text
 * @param {String} font - (optional) The font that the text is being rendered in
 */
Roguelike.UI.Element.Text = function(position, text, color, fontSize, font) {

	/**
	 * Inherit the constructor from the Element class
	 */
	Roguelike.UI.Element.call(this, position);

	/**
	 * @property {String} text - The text that is being displayed
	 */
	this.text = text;

	/**
	 * @property {Number} fontSize - The size of the text
	 */
	this.color = color || "rgba(255, 255, 255, 1)";

	/**
	 * @property {Number} fontSize - The size of the text
	 */
	this.fontSize = fontSize || 12;

	/**
	 * @property {String} font - The font that the text is being rendered in
	 */
	this.font = font || "Courier New";

};

Roguelike.UI.Element.Text.prototype = Object.create(Roguelike.UI.Element.prototype, {

	render: {

		/**
		 * Returns a function that handles rendering the current Element
		 * @protected
		 *
		 * @param {Object} context - Reference to the current canvas context
		 * @param {Roguelike.Vector2} parentPosition - The position of the previous container that called this render function
		 */
		value: function(context, parentPosition) {

			//Create a new starting position using the provided position and the position of this element
			var newPosition = parentPosition.combine(this.position);

			this.context.font = this.fontSize + "px " + this.font;
			this.context.fillStyle = this.color;

			//Draw the title on screen
			this.context.fillText(
				this.text,
				newPosition.x,
				newPosition.y
			);

		}

	}

});