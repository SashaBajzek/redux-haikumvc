import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default class SubmitButton extends React.Component {
	constructor(props) {
		super(props);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render() {
		return <button className="submit">
			SUBMIT A HAIKU
		</button>	
		
	}
};


/*


			<form ng-submit="addHaiku()" name="createHaikuForm">

				<div class="modal-header">
					<button type="button" class="close" ng-click="cancel()" aria-label="Close"><span aria-hidden="true">&times;</span></button>
					<h4 class="modal-title" id="newHaikuModalLabel">CREATE A HAIKU</h4>
				</div>
				<div class="modal-body">

					<input type="text" placeholder="Haiku Line 1:  5 Syllables" ng-model="haikuLine1" name="haikuLine1" minlength="5" required>
					<br>
					<input type="text" placeholder="Haiku Line 2:  7 Syllables" ng-model="haikuLine2" name="haikuLine2" minlength="7" required>
					<br>
					<input type="text" placeholder="Haiku Line 3:  5 Syllables" ng-model="haikuLine3" name="haikuLine3" minlength="5" required>
					<br>
					<div class="form-group">
						<label for="haikuTheme">HAIKU BACKGROUND THEME:</label>
						<select class="form-control" id="theme" ng-model="haikuTheme" name="haikuTheme" required>
							<option value="" disabled selected hidden>Please Choose...</option>
							<option value="beachTheme">Beach</option>
							<option value="careerTheme">Career</option>
							<option value="catTheme">Cat</option>
							<option value="cheersTheme">Cheers</option>
							<option value="childhoodTheme">Childhood</option>
							<option value="coffeeTheme">Coffee</option>
							<option value="dogTheme">Dog</option>
							<option value="fantasyTheme">Fantasy</option>
							<option value="fitnessTheme">Fitness</option>
							<option value="foodTheme">Food</option>
							<option value="happyTheme">Happy</option>
							<option value="musicTheme">Music</option>
							<option value="natureTheme">Nature</option>
							<option value="painTheme">Pain</option>
							<option value="romanceTheme">Romance</option>
							<option value="somberTheme">Somber</option>
							<option value="stormTheme">Storm</option>
							<option value="technologyTheme">Technology</option>
							<option value="travelTheme">Travel</option>
							<option value="whimsyTheme">Whimsy</option>
						</select>
					</div>

				</div>
				<div class="modal-footer">
					<button ng-click="cancel()" type="button" class="btn btn-default" >CLOSE</button>
					<button type="submit" class="btn btn-primary" ng-disabled="createHaikuForm.$invalid" ng-click="ok()" >SUBMIT HAIKU</button>
				</div>
			</form>	
    

*/