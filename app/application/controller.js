import Ember from 'ember';

const {Controller, debug, inject} = Ember;

export default Controller.extend({
	player: inject.service(),

	actions: {
		ytPlaying() {
			this.set('player.isPlaying', true);
		},
		ytPaused() {
			this.set('player.isPlaying', false);
		},
		ytEnded() {
			this.set('player.isPlaying', false);
			this.get('player').next();
		},
		ytError(error) {
			this.set('player.isPlaying', false);
			debug(error);

			// dont do anything on 'invalid parameter'
			if (error === 2) {
				return;
			}

			// @TODO mark track as georestricted on 'invalid parameter'
			// if (error === 150) {}

			// otherwise play next
			this.get('player').next();
		}
	}
});

// START REMOTE TRACK

// onTrackForRemoteChange: observer('session.currentUser.settings.trackForRemote', function () {
// 	let settings = this.get('session.currentUser.settings');
//
// 	if (!this.get('player.didPlay')) {
// 		debug('didnt activate play')
// 	}
//
// 	if (!settings) {
// 		debug('remote track changed but no settings');
// 		return;
// 	}
//
// 	settings.then(settings => {
//
// 		// make sure it doesn't run too often
// 		run.debounce(this, this.setTrackFromRemote, 400, true);
// 	});
// }),
//
// setTrackFromRemote() {
// 	let track = this.get('session.currentUser.settings.trackForRemote');
//
// 	if (!track) {
// 		debug('cant set track without a track!');
// 		return;
// 	}
//
// 	// open the track (it's a relationship)
// 	track.then(track => {
// 		debug('setting track from remote to ' + track.get('title'));
// 		this.set('player.model', track);
// 	});
// },

// END REMOTE TRACK
