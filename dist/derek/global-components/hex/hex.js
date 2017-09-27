/* eslint-disable */

/* {{{ Hosted vs In-House calculator */

/*
 *	Note: I am changing this script since whoever first wrote it
 *  decided to put all the cost values sprinkled throughout as raw
 *  integers.  For any future development, please put cost variables
 *  or anything else subject to change in variables here!!!!!!
 */
//////PRICES
//Servers
var COST_R720			= 4300;
var COST_R320			= 3400;
var COST_MD1220			= 5400;

//Server Licenses
var COST_BES			= 2500;

//Backup
var COST_LTO4			= 2700;
var COST_SYM_BACKUP_EXE	= 1100;

//Seats
var COST_HEX			= 10;
var COST_OUTLOOK 		= 90;
var COST_EXCHANGE_CAL	= 77;
var COST_BLACKBERRY 	= 70;
var COST_AV_SETUP		= 1800;
var COST_AV_USER		= 36.67;

var COST_HEX_OUTLOOK 	= 2;

var IMAGE_CDN			= 'https://752f77aa107738c25d93-f083e9a6295a3f0714fa019ffdca65c3.ssl.cf1.rackcdn.com';
/////////


var MAIL_ID = '#mailboxes';
var BB_ID = '#blackberry';
var CALC_ID = '#calculate_button';
var mailboxes = 0; /* the number of exchange mailboxes */
var blackberry = 0; /* the number of blackberry users */
var windowsServerLicenses = {
	'primaryExchange': 0,
	'secondaryExchange': 0,
	'backupServer': 0
};
var exchangeServerLicenses = {
	'primaryExchange': 0,
	'secondaryExchange': 0
};
var servers = {
	'primaryExchange': 0,
	'secondaryExchange': 0,
	'backupServer': 0
};
var SBSshowing = true; /* used to keep track of sbs row.  Can't use ':hidden' because category toggling affects it */
var sbsEligible = true;

var minus = IMAGE_CDN + '/email-hosting/page/minus.png';

/*{{{ var hierarchy
	Contains the hierarchy of the rows for easy processing/iteration.
	these are the ids of the first part of id keys
	Top  hierarchy_ + Secondary Rows _primaryExchange + Column _y1
	is hierarchy_primaryExchange_y1
*/
var hierarchy = {
	'hardware': [
		'primaryExchange',
		'secondaryExchange',
		'blackberry',
		//'networkSecurity',
		'storage'
	],
	'licenses': [
		//'windows',
		//'exchange',
		'blackberry',
		//'sbs'
	],
	'backup': [
		'server',
		//'storage',
		'software'
	],
	'user': [
		'rackspace',
		//'windows',
		'outlook',
		'exchange',
		//'sbs',
		'blackberry',
		'antivirus'
	],
	'costs': [
		'hosting',
		'microsoft',
		'deploy',
		'admin'
	]
};/*}}}*/

/* {{{ hosted_inhouse_calculator()
	Does it all.
*/
var hosted_inhouse_calculator = function() {
	hosted_inhouse_init();
	updateCalculator();
	addFormEvents();
	addTableEvents();
};
/*}}}*/

/* {{{ hosted_inhouse_init()
	Initializes the calculator to its default state.
*/
var hosted_inhouse_init = function() {
	//hosted_inhouse_moveCallout();
	//$('#callout').show();

	mailboxes = getIntFromInput(MAIL_ID);
	blackberry = getIntFromInput(BB_ID);

	//Get computer's year
	var year = new Date().getFullYear();
	$('#y1').text('In-house ' + year);
	$('#y2').text('In-house ' + (parseInt(year) + 1));
	$('#y3').text('In-house ' + (parseInt(year) + 2));

	//Make these rows clicked.
	updateUserSbs(true);
	updateHardwarePrimaryExchange(true);
	updateHardwareNetworkSecurity(true);
	updateLicensesWindows(false);
	updateLicensesExchange(false);
	updateLicensesSBS(true);
	updateUserRackspace(true);
	updateUserOutlook(true);
	$('#user_outlook_check').click();	// rather than set previous line to false, a click event triggers correct total calculations
	updateUserBlackberry(true);
	updateUserAntivirus(true);
	updateCostsHosting(true);
	updateCostsMicrosoft(true);
	updateCostsDeploy(true);
	updateCostsAdmin(true);
	$('#hardware_blackberry_check').attr('disabled', true);
	$('#licenses_sbs_check').attr('disabled', true);
	$('#licenses_blackberry_check').attr('disabled', true);
	$('#user_blackberry_check').attr('disabled', true);
}/*}}}*/

//var hosted_inhouse_moveCallout = function() {
//	var position = $('#costs_totals_rax').position();
//	$('#callout').css('left', position.left + 90);
//	$('#callout').css('top', position.top + 6);
//}

/* {{{ updateCalculator
	Updates the values in the table related to the number of mailboxes and blackberry users.
*/
var updateCalculator = function() {
	mailboxes = getIntFromInput(MAIL_ID);
	blackberry = getIntFromInput(BB_ID);

	if ((mailboxes > 0) && (blackberry <= mailboxes)) {
		if (blackberry > 0) {
			if ($('#hardware_totals img').attr('src') == minus) {
				$('#hardware_blackberry').show();
			}
			if ($('#licenses_totals img').attr('src') == minus) {
				$('#licenses_blackberry').show();
			}
			if ($('#user_totals img').attr('src') == minus) {
				$('#user_blackberry').show();
			}

			updateHardwareBlackberry(true);
			updateLicensesBlackberry(true);
			updateUserBlackberry(true);
		} else {
			updateHardwareBlackberry(false);
			updateLicensesBlackberry(false);
			updateUserBlackberry(false);

			$('#hardware_blackberry').hide();
			$('#licenses_blackberry').hide();
			$('#user_blackberry').hide();
		}

		if (mailboxes <= 25) {
			if (mailboxes <= 5) {
				updateHardwareStorage(true);
			}
			updateUserSbs(true);
		} else {
			updateHardwareStorage(false);
			updateBackupServer(true);
			updateBackupStorage(true);
			updateBackupSoftware(true);
		}

		if (isSBS()) {
			updateLicensesSBS(true);
			updateLicensesWindows(false);
			updateLicensesExchange(false);
			$('#smallbiz').show();
		} else {
			updateLicensesSBS(false);
			updateUserWindows(true);
			updateUserExchange(true);
			$('#smallbiz').hide();
		}

		if (mailboxes >= 75) {
			$('#highavail').attr('checked', true);
			updateHardwareSecondaryExchange(true);
			$('form span.required').show();
			$('#user_sbs').hide();
			SBSshowing = false;
		} else {
			$('form span.required').hide();
		}

		updateWindowsLicenseCount();
		updateExchangeLicenseCount();
		updateUserTotalCount();
		updateUserRackspaceCount();
		updateUserWindowsCount();
		updateUserExchangeCount();
		updateUserOutlookCount();
		updateUserSbsCount();
		updateUserBlackberryCount();
		updateUserAntivirusCount();
		updateCostsHostingCount();
		updateCostsMicrosoft($('#costs_microsoft_check').attr('checked'));
		updateAvailability();
	} else {
		if (mailboxes <= 0 && mailboxes < blackberry) {
			alert('You must have a positive number of mailboxes and it must be greater than or equal to the number of BlackBerry users.');
		} else if (mailboxes <= 0) {
			alert('You must have a positive number of mailboxes.');
		} else {
			alert('The number of BlackBerry users must be less than or equal to the number of mailboxes.');
		}
	}
}/* }}} */

/*{{{ addFormEvents()
	Adds click events for items in the form.
*/
var addFormEvents = function() {
	$(MAIL_ID).keyup(function(e) {
		var mail_qty = getIntFromInput(MAIL_ID);
		var bb_qty = getIntFromInput(BB_ID);
		if ((mail_qty > 0) && (bb_qty <= mail_qty)) {
			$(CALC_ID).removeAttr('disabled');
			if (e.keyCode == 13) {
				$(CALC_ID).click();
			}
		} else {
			$(CALC_ID).attr('disabled', 'true');
		}
	});

	$(BB_ID).keyup(function(e) {
		var mail_qty = getIntFromInput(MAIL_ID);
		var bb_qty = getIntFromInput(BB_ID);
		if (bb_qty <= mail_qty) {
			$(CALC_ID).removeAttr('disabled');
			if (e.keyCode == 13) {
				$(CALC_ID).click();
			}
		}
	});

	$(CALC_ID).click(function() {
		updateCalculator();
	});

	$('#highavail').click(function() {
		updateCalculator();
	});
}/*}}}*/

/*{{{ Table Event Adders - these add the click events for items in the table.*/
/* {{{ addTableEvents() */
var addTableEvents = function() {
	addParentClickEvents();
	addHardwareEvents();
	addLicenseEvents();
	addBackupEvents();
	addUserEvents();
	addCostsEvents();
}/*}}}*/

/* {{{ addParentClickEvents() - add click events to parent rows */
var addParentClickEvents = function() {
	$.each(hierarchy, function(category, items) {
		var parentRowId = '#' + category + '_totals';
		$(parentRowId).click(function(){

			/* handle button switching */
			var button = parentRowId + ' td img';
			if ($(button).attr('src') == IMAGE_CDN + '/email-hosting/page/plus.png') {
				$(button).attr('src', IMAGE_CDN + '/email-hosting/page/minus.png');
			} else {
				$(button).attr('src', IMAGE_CDN + '/email-hosting/page/plus.png');
			}

			$.each(items, function(key, value) {
				//Handle sbs showing up.  Otherwise just toggle the rows.
				if (category == 'user' && value == 'sbs') {
					//Only show if High Availability is checked and user items are displayed
					if (!$('#highavail').attr('checked') && mailboxes <= 25 && $('#user_totals img').attr('src') == minus) {
						$('#user_sbs').show();
					} else {
						$('#user_sbs').hide();
					}

				} else if (category == 'user' && (value == 'windows')) {
					if (($('#highavail').attr('checked') || mailboxes > 25) && $('#user_totals img').attr('src') == minus) {
						$('#user_' + value).show();
					} else {
						$('#user_' + value).hide();
					}
				} else if (category == 'hardware' && (value == 'blackberry')) {
					if (($('#hardware_totals img').attr('src') == minus) &&
							(blackberry > 0)) {
						$('#hardware_blackberry').show();
					} else {
						$('#hardware_blackberry').hide();
					}
				} else if (category == 'licenses') {
					if (value == 'windows') {
						if (isSectionOpen('licenses') && !isSBS()) {
							$('#licenses_windows').show();
						 } else {
						 	$('#licenses_windows').hide();
						}
					} else if (value == 'exchange') {
						if (isSectionOpen('licenses') && !isSBS()) {
							$('#licenses_exchange').show();
						} else {
							$('#licenses_exchange').hide();
						}
					} else if (value == 'sbs') {
						if (isSectionOpen('licenses') && isSBS()) {
							$('#licenses_sbs').show();
						} else {
							$('#licenses_sbs').hide();
						}
					} else if (value == 'blackberry') {
						if (isSectionOpen('licenses') && (blackberry > 0)) {
							$('#licenses_blackberry').show();
						} else {
							$('#licenses_blackberry').hide();
						}
					}
				} else {
					$('#' + category + '_' + value).toggle();
				}
			});

			//hosted_inhouse_moveCallout();
		});
	});
}
/* }}}*/

/* {{{ Add Row Events - Handle events that occur in any table row. Most event handlers are going to call an updater */
/* {{{ addHardwareEvents() */
var addHardwareEvents = function() {
	$('#hardware_primaryExchange_check').click(function() {
		updateHardwarePrimaryExchange($('#hardware_primaryExchange_check').attr('checked'));
	});

	$('#hardware_secondaryExchange_check').click(function() {
		updateHardwareSecondaryExchange($('#hardware_secondaryExchange_check').attr('checked'));
	});

	$('#hardware_blackberry_check').click(function() {
		updateHardwareBlackberry($('#hardware_blackberry_check').attr('checked'));
	});

	$('#hardware_networkSecurity_check').click(function() {
		updateHardwareNetworkSecurity($('#hardware_networkSecurity_check').attr('checked'));
	});

	$('#hardware_storage_check').click(function() {
		updateHardwareStorage($('#hardware_storage_check').attr('checked'));
	});
}
/* }}} */

/* {{{ addLicenseEvents() */
var addLicenseEvents = function() {
	$('#licenses_windows_check').click(function() {
		updateLicensesWindows($('#licenses_windows_check').attr('checked'));
	});

	$('#licenses_exchange_check').click(function() {
		updateLicensesExchange($('#licenses_exchange_check').attr('checked'));
	});
}
/* }}} */

/* {{{ addBackupEvents() */
var addBackupEvents = function() {
	$('#backup_server_check').click(function() {
		updateBackupServer($('#backup_server_check').attr('checked'));
	});

	$('#backup_storage_check').click(function() {
		updateBackupStorage($('#backup_storage_check').attr('checked'));
	});

	$('#backup_software_check').click(function() {
		updateBackupSoftware($('#backup_software_check').attr('checked'));
	});
}
/* }}} */

/* {{{ addUserEvents() */
var addUserEvents = function() {
	$('#user_rackspace_check').click(function() {
		updateUserRackspace($('#user_rackspace_check').attr('checked'));
	});

	$('#user_windows_check').click(function() {
		updateUserWindows($('#user_windows_check').attr('checked'));
	});

	$('#user_exchange_check').click(function() {
		updateUserExchange($('#user_exchange_check').attr('checked'));
	});

	$('#user_outlook_check').click(function() {
		updateUserOutlook($('#user_outlook_check').attr('checked'));
	});

	$('#user_sbs_check').click(function() {
		updateUserSbs($('#user_sbs_check').attr('checked'));
	});

	$('#user_blackberry_check').click(function() {
		updateUserBlackberry($('#user_blackberry_check').attr('checked'));
	});

	$('#user_antivirus_check').click(function() {
		updateUserAntivirus($('#user_antivirus_check').attr('checked'));
	});
}
/* }}} */

/*{{{ addCostsEvents() */
var addCostsEvents = function() {
	$('#costs_hosting_check').click(function() {
		updateCostsHosting($('#costs_hosting_check').attr('checked'));
	});

	$('#costs_microsoft_check').click(function() {
		updateCostsMicrosoft($('#costs_microsoft_check').attr('checked'));
	});

	$('#costs_deploy_check').click(function() {
		updateCostsDeploy($('#costs_deploy_check').attr('checked'));
	});

	$('#deploy_costs').keyup(function() {
		updateCostsDeploy($('#costs_deploy_check').attr('checked'));
	});

	$('#costs_admin_check').click(function() {
		updateCostsAdmin($('#costs_admin_check').attr('checked'));
	});

	$('#fte').keyup(function() {
		updateCostsAdmin($('#costs_admin_check').attr('checked'));
	});

	$('#salary').keyup(function() {
		updateCostsAdmin($('#costs_admin_check').attr('checked'));
	});
}
/* }}} */
/*}}}*/
/*}}}*/

/* {{{ Updaters - these handle updating values when something has changed in the respective category ...
	When an updater is passed true for selected, it simulates the user clicking the row's checkbox (and vice versa).
	These handle most of the logic for pricing and related rows.
*/
/*{{{ Hardware Updaters */
/*{{{ updateHardwarePrimaryExchange()*/
var updateHardwarePrimaryExchange = function(selected) {
	$('#hardware_primaryExchange_check').attr('checked', selected);
	if(selected && mailboxes > 0) {
		windowsServerLicenses['primaryExchange'] = 1;
		exchangeServerLicenses['primaryExchange'] = 1;
		servers['primaryExchange'] = 1;

		hosted_inhouse_setValues('hardware', 'primaryExchange', COST_R720, 0, 0);

		//Enable secondary if primary is selected
		$('#hardware_secondaryExchange_check').attr('disabled', false);
	} else {
		windowsServerLicenses['primaryExchange'] = 0;
		exchangeServerLicenses['primaryExchange'] = 0;
		servers['primaryExchange'] = 0;

		hosted_inhouse_clear('hardware','primaryExchange');

		//Disable secondary if primary not selected
		if ($('#hardware_secondaryExchange_check').attr('checked')) {
			windowsServerLicenses['secondaryExchange'] = 0;
			exchangeServerLicenses['secondaryExchange'] = 0;
			servers['secondaryExchange'] = 0;
		}
		$('#hardware_secondaryExchange_check').attr('checked', false);
		$('#hardware_secondaryExchange_check').attr('disabled', true);
		hosted_inhouse_clear('hardware', 'secondaryExchange');
	}
	updateWindowsLicenseCount();
	updateExchangeLicenseCount();
	updateCostsHostingCount();
}/*}}}*/

/* {{{ updateHardwareSecondaryExchange() */
var updateHardwareSecondaryExchange = function(selected) {
	$('#hardware_secondaryExchange_check').attr('checked', selected);
	if(selected && mailboxes > 0) {
		windowsServerLicenses['secondaryExchange'] = 1;
		exchangeServerLicenses['secondaryExchange'] = 1;
		servers['secondaryExchange'] = 1;
		hosted_inhouse_setValues('hardware', 'secondaryExchange', COST_R720, 0, 0);

	} else  {
		windowsServerLicenses['secondaryExchange'] = 0;
		exchangeServerLicenses['secondaryExchange'] = 0;
		servers['secondaryExchange'] = 0;
		hosted_inhouse_clear('hardware', 'secondaryExchange');
	}
	updateWindowsLicenseCount();
	updateExchangeLicenseCount();
	updateCostsHostingCount();
}/*}}}*/

/* {{{ updateHardwareBlackberry() */
var updateHardwareBlackberry = function(selected) {
	$('#hardware_blackberry_check').attr('checked', selected);
	if(selected && mailboxes > 0 && blackberry > 0) {
		hosted_inhouse_setValues('hardware', 'blackberry', COST_R320, 0, 0);
	} else  {
		hosted_inhouse_clear('hardware', 'blackberry');
	}
	updateLicensesBlackberry(selected);
}/*}}}*/

/* {{{ updateHardwareNetworkSecurity() */
var updateHardwareNetworkSecurity = function(selected) {
	$('#hardware_networkSecurity_check').attr('checked', selected);
	if(selected && mailboxes > 0) {
		hosted_inhouse_setValues('hardware', 'networkSecurity', 1800, 0, 0);
	} else  {
		hosted_inhouse_clear('hardware', 'networkSecurity');
	}
}/*}}}*/

/* {{{ updateHardwareStorage() */
var updateHardwareStorage = function(selected) {
	$('#hardware_storage_check').attr('checked', selected);
	if(selected && mailboxes > 0) {
		hosted_inhouse_setValues('hardware', 'storage', COST_MD1220, 0, 0);
	} else  {
		hosted_inhouse_clear('hardware', 'storage');
	}
	updateWindowsLicenseCount();
}/*}}}*/
/*}}}*/

/* {{{ License Updaters */
/* {{{ updateLicensesWindows */
var updateLicensesWindows = function(selected) {
	var total = 0;

	$.each(windowsServerLicenses, function(item, value) {
		total += value;
	});

	$('#licenses_windows_check').attr('checked', selected);
	if (selected && mailboxes > 0 && total > 0) {
		if (isSectionOpen('licenses')) {
			$('#licenses_windows').show();
		}
		hosted_inhouse_setValues('licenses', 'windows', total * 999, 0, 0, 'Included');
	} else  {
		hosted_inhouse_clear('licenses', 'windows');
		$('#licenses_windows').hide();
	}
}/*}}}*/

/* {{{ updateLicensesExchange() */
var updateLicensesExchange = function(selected) {
	var total = 0;

	$.each(exchangeServerLicenses, function(item, value) {
		total += value;
	});

	$('#licenses_exchange_check').attr('checked', selected);
	if (selected && mailboxes > 0 && total > 0) {
		if (isSectionOpen('licenses')) {
			$('#licenses_exchange').show();
		}
		hosted_inhouse_setValues('licenses', 'exchange', total * 699, 0, 0, 'Included');
	} else  {
		hosted_inhouse_clear('licenses', 'exchange');
		$('#licenses_exchange').hide();
	}
}/*}}}*/

/* {{{ updateLicensesBlackberry() */
var updateLicensesBlackberry = function(selected) {
	$('#licenses_blackberry_check').attr('checked', selected);
	if(selected && mailboxes > 0 && blackberry > 0) {
		hosted_inhouse_setValues('licenses', 'blackberry', COST_BES, 0, 0);
	} else  {
		hosted_inhouse_clear('licenses', 'blackberry');
	}
}/*}}}*/

/* {{{ updateLicensesSBS() */
var updateLicensesSBS = function(selected) {
	$('#licenses_sbs_check').attr('checked', selected);
	if (selected && (mailboxes > 0) && (mailboxes <= 25)) {
		if (isSectionOpen('licenses')) {
			$('#licenses_sbs').show();
		}
		hosted_inhouse_setValues('licenses', 'sbs', 1089, 0, 0);
	} else  {
		hosted_inhouse_clear('licenses', 'sbs');
		$('#licenses_sbs').hide();
	}
}/*}}}*/
/*}}}*/

/* {{{ Backup Updaters */
/*{{{ updateBackupServer() */
var updateBackupServer = function(selected) {
	$('#backup_server_check').attr('checked', selected);
	if(selected && mailboxes > 0) {
		hosted_inhouse_setValues('backup', 'server', COST_LTO4, 0, 0);
		windowsServerLicenses['backupServer'] = 1;
		servers['backupServer'] = 1;
	} else  {
		hosted_inhouse_clear('backup', 'server');
		windowsServerLicenses['backupServer'] = 0;
		servers['backupServer'] = 0;
	}
	updateWindowsLicenseCount();
	updateCostsHostingCount();
}/*}}}*/

/*{{{ updateBackupStorage() */
var updateBackupStorage = function(selected) {
	$('#backup_storage_check').attr('checked', selected);
	if(selected && mailboxes > 0) {
		hosted_inhouse_setValues('backup', 'storage', 10400, 0, 0);
	} else  {
		hosted_inhouse_clear('backup', 'storage');
	}
}/*}}}*/

/*{{{ updateBackupSoftware() */
var updateBackupSoftware = function(selected) {
	$('#backup_software_check').attr('checked', selected);
	if(selected && mailboxes > 0) {
		hosted_inhouse_setValues('backup', 'software', COST_SYM_BACKUP_EXE, 0, 0);
	} else  {
		hosted_inhouse_clear('backup', 'software');
	}
}
/*}}}*/
/*}}}*/

/* {{{ User Updaters */
/*{{{ updateUserRackspace() */
var updateUserRackspace = function(selected) {
	$('#user_rackspace_check').attr('checked', selected);
	if (selected) {
		hosted_inhouse_setValues('user', 'rackspace', 0, 0, 0, (mailboxes * 10 * 12));
	} else {
		hosted_inhouse_clear('user', 'rackspace');
	}
}/*}}}*/

/*{{{ updateUserWindows() */
var updateUserWindows = function(selected) {
	$('#user_windows_check').attr('checked', selected);
	if(selected && mailboxes > 5) {
		hosted_inhouse_setValues('user', 'windows', (mailboxes - 5) * 40, 0, 0);
	} else {
		hosted_inhouse_clear('user', 'windows');
	}
}/*}}}*/

/*{{{ updateUserExchange() */
var updateUserExchange = function(selected) {
	$('#user_exchange_check').attr('checked', selected);
	if(selected && mailboxes > 0) {
		hosted_inhouse_setValues('user', 'exchange', mailboxes * COST_EXCHANGE_CAL, 0, 0, 0);
	} else {
		hosted_inhouse_clear('user', 'exchange');
	}
}/*}}}*/

/*{{{ updateUserOutlook() */
var	updateUserOutlook = function(selected) {
	$('#user_outlook_check').attr('checked', selected);
	if(selected && mailboxes > 0) {
		hosted_inhouse_setValues('user', 'outlook', mailboxes * COST_OUTLOOK, 0, 0, mailboxes * COST_HEX_OUTLOOK * 12);
	} else {
		hosted_inhouse_clear('user', 'outlook');
	}
}/*}}}*/

/*{{{ updateUserSbs() */
var updateUserSbs = function(selected) {
	$('#user_sbs_check').attr('checked', selected);
	if (selected && (mailboxes > 0)) {
		var total = (mailboxes - 5) * 77;
		total = (total < 0) ? 0 : total;
		if (total >= 0) {
			hosted_inhouse_setValues('user', 'sbs', total, 0, 0);
		} else {
			hosted_inhouse_setValues('user', 'sbs', 0, 0, 0);
		}
	} else {
		hosted_inhouse_clear('user', 'sbs');
	}
}/*}}}*/

/*{{{ updateUser`() */
var	updateUserBlackberry = function(selected) {
	$('#user_blackberry_check').attr('checked', selected);
	if(selected && mailboxes > 0 && blackberry > 0) {
		hosted_inhouse_setValues('user', 'blackberry', (blackberry * COST_BLACKBERRY), 0, 0, blackberry * 120);
	} else {
		hosted_inhouse_clear('user', 'blackberry');
	}
}/*}}}*/

/*{{{ updateUserAntivirus() */
var updateUserAntivirus = function(selected) {
	$('#user_antivirus_check').attr('checked', selected);
	if(selected && mailboxes > 0) {
		hosted_inhouse_setValues('user', 'antivirus', (COST_AV_SETUP + Math.round(mailboxes * COST_AV_USER)), Math.round(mailboxes * COST_AV_USER), Math.round(mailboxes * COST_AV_USER));
	} else {
		hosted_inhouse_clear('user', 'antivirus');
	}
}/*}}}*/
/*}}}*/

/*{{{ Cost Updaters */
/*{{{ updateCostsHosting() */
var updateCostsHosting = function(selected) {
	var total = 0;

	$.each(servers, function(item, value) {
		total += value;
	});

	$('#costs_hosting_check').attr('checked', selected);
	if(selected && mailboxes > 0) {
		hosted_inhouse_setValues('costs', 'hosting', total * 1000, total * 1000, total * 1000);
	} else {
		hosted_inhouse_clear('costs', 'hosting');
	}
}/*}}}*/

/*{{{ updateCostsMicrosoft() */
var updateCostsMicrosoft = function(selected) {
	if( mailboxes > 0) {
		$('#costs_microsoft_check').attr('disabled', false);
		$('#costs_microsoft_check').attr('checked', selected);
	} else {
		$('#costs_microsoft_check').attr('checked', false);
		$('#costs_microsoft_check').attr('disabled', true);
	}

	//TODO Crazy math ... double check
	var serverCount = 0;
	// windows server
	if(blackberry > 0) {
		serverCount += 4 * 999;
	} else {
		serverCount += 3 * 999;
	}

	//exchange
	serverCount += 1398;

	//windows user cals
	if (mailboxes > 5) {
		serverCount += (mailboxes - 5) * 40;
	}

	//exchange
	serverCount += mailboxes * COST_EXCHANGE_CAL;

	//outlook
	serverCount += mailboxes * COST_OUTLOOK;

	if(selected && mailboxes > 0) {
		var price = Math.round(serverCount * .25);
		hosted_inhouse_setValues('costs', 'microsoft', price, price, price);
	} else {
		hosted_inhouse_clear('costs', 'microsoft');
	}
}/*}}}*/

/*{{{ updateCostsDeploy() */
var updateCostsDeploy = function(selected) {
	$('#costs_deploy_check').attr('checked', selected);
	if(selected && mailboxes > 0) {
		var cost = parseInt($('#deploy_costs').val());
		if (!isNaN(cost)) {
			hosted_inhouse_setValues('costs', 'deploy', 200 * cost, 0, 0);
		} else if ($('#deploy_costs').val() == '') {
			hosted_inhouse_setValues('costs', 'deploy', 0, 0, 0);
		}
	} else {
		hosted_inhouse_clear('costs', 'deploy');
	}
}/*}}}*/

/*{{{ updateCostsAdmin() */
var updateCostsAdmin = function(selected) {
	$('#costs_admin_check').attr('checked', selected);
	if(selected && mailboxes > 0) {
		var fte = parseInt($('#fte').val());
		var salary = parseInt($('#salary').val());

		if(!isNaN(fte) && !isNaN(salary)) {
			var price = parseInt(salary * (fte / 100));
			hosted_inhouse_setValues('costs', 'admin', price, price, price);
		} else if ($('#fte').val() == '' || $('#salary').val() == '') {
			hosted_inhouse_setValues('costs', 'admin', 0, 0, 0);
		}
	} else {
		hosted_inhouse_clear('costs', 'admin');
	}
}/*}}}*/
/*}}}*/

/* {{{ updateAvailability() - updates items when the High Availability button is checked */
var updateAvailability = function() {
	if (mailboxes >= 75) {
		$('#highavail').attr('checked', true);
	}

	if ($('#highavail').attr('checked')) {
		$('#smallbiz').hide();
	} else {
		if (mailboxes < 25) {
			$('#smallbiz').show();
		}
	}

	// If SBS, change text
	//if (mailboxes <= 25 && !($('#highavail').attr('checked'))) {
	//	$('#hardware_primaryExchange td.left2 span').text('Small Business Server');
	//} else {
	//	$('#hardware_primaryExchange td.left2 span').text('Primary Exchange Server');
	//}

	//Only want it to show sbs if High Availability not checked and others showing
	if (mailboxes <= 25 && !($('#highavail').attr('checked')) && isSectionOpen('user')) {
		$('#user_sbs').show();
		sbsEligible = true;
	} else {
		$('#user_sbs').hide();
		sbsEligible = false;
	}

	//if ($('#highavail').attr('checked') || mailboxes > 25) {
		if (isSectionOpen('user')) {
			$('#user_windows').show();
			$('#user_exchange').show();
		}
		updateUserWindows(true);
		updateUserExchange(true);
	//} else {
	//	updateUserWindows(false);
	//	$('#user_windows').hide();
	//	updateUserExchange(false);
	//	$('#user_exchange').hide();
	//}

	var checked = $('#highavail').attr('checked');
	updateHardwareSecondaryExchange(checked);
	if (mailboxes > 20) {
		updateHardwareStorage(false);
	} else {
		updateHardwareStorage(true);
	}
	updateUserSbs($('#user_sbs_check').attr('checked'));
}
/*}}}*/
/*}}}*/

/* {{{ setValues() - sets the values of the specified row ...
	If null or a non-numeric is passed for the rackspace column, it will set it to 'Included'.
	Also handles updating the totals after setting the values.
*/
var hosted_inhouse_setValues = function(category, name, val1, val2, val3, rax) {
	var row_id = '#' + category + '_' + name;
	$(row_id + ' td').removeClass('gray');
	$(row_id + '_y1').text('$' + addCommas(val1));
	$(row_id + '_y2').text('$' + addCommas(val2));
	$(row_id + '_y3').text('$' + addCommas(val3));

	if (isNaN(rax)) {
		$(row_id + '_rax').text('Included');
	} else {
		$(row_id + '_rax').text('$' + addCommas(rax));
	}

	updateTotals(category);
}/* }}} */

/* {{{ clear() - zeros out the row and grays it after it has been deselected. */
var hosted_inhouse_clear = function(category, name) {
	var row_id = '#' + category + '_' + name;
	$(row_id + ' td').addClass('gray');
	$(row_id + '_y1').text('$0');
	$(row_id + '_y2').text('$0');
	$(row_id + '_y3').text('$0');

	if($.trim($(row_id + '_rax').text()) != 'Included') {
		$(row_id + '_rax').text('$0');
	}

	updateTotals(category);
}/*}}}*/

/* {{{ updateTotals() - updates the values for the specified category total and the overall total */
var updateTotals = function(category) {
	updateInhouseTotals(category);
	updateRaxTotals(category);
	updateUserCosts();
}

var updateInhouseTotals = function(category) {
	var categoryTotal = {
		'y1': 0,
		'y2': 0,
		'y3': 0
	};
	var overallTotal = {
		'y1': 0,
		'y2': 0,
		'y3': 0
	};

	//Get Values
	$.each(hierarchy, function(parentRow, items) {
		$.each(items, function(key, item) {
			$.each(categoryTotal, function(year, value) {
				var cellValue = dollarToInt($('#' + parentRow + '_' + item + '_' + year).text());
				overallTotal[year] += cellValue;
				if (parentRow == category) {
					categoryTotal[year] +=  cellValue;
				}
			});
		});
	});

	//Display
	$.each(categoryTotal, function(year, value) {
		$('#' + category + '_totals_' + year).text('$' + addCommas(categoryTotal[year]));
		$('#total_' + year + '_top').text('$' + addCommas(overallTotal[year]));
		$('#total_' + year + '_bottom').text('$' + addCommas(overallTotal[year]));
	});

}

// This handles things on a more specific basis since Rax only has a few costs
var updateRaxTotals = function(category) {
	if (category == 'user') {
		var isSBS = false; //mailboxes <= 25 && !$('#highavail').attr('checked');

		var total = 0;
		total += dollarToInt($('#user_outlook_rax').text());
		total += dollarToInt($('#user_rackspace_rax').text());
		total += dollarToInt($('#user_blackberry_rax').text());

		$('#user_totals_rax').text('$' + addCommas(total));
		$('#total_rax_top').text('$' + addCommas(total));
		$('#total_rax_bottom').text('$' + addCommas(total));
	}
}

// Calculates the costs per user and displays it
var updateUserCosts = function() {
	var y1 =  dollarToInt($('#total_y1_top').text());
	var y2 =  dollarToInt($('#total_y2_top').text());
	var y3 =  dollarToInt($('#total_y3_top').text());
	var rax = dollarToInt($('#total_rax_top').text());

	$('#in-house_price').text('$' + addCommas(Math.round((y1 + y2 + y3) / (mailboxes * 3))));
	$('#hosted_price').text('$' + addCommas(Math.round(rax / mailboxes)));
}
// }}}

/*{{{ Update Counts - these handle updating the counts for global values ...
	They also update the appropriate rows after modification.
*/
/*{{{ updateWindowsLicenseCount() */
var updateWindowsLicenseCount = function() {
	var total = 0;

	$.each(windowsServerLicenses, function(item, value) {
		total += value;
	});

	// If SBS, zero out Windows licenses
	if (isSBS()) {
		total = 0;
	}

	$('#licenses_windows span.count').text('(' + total + ') ');
	$('#licenses_windows_check').attr('checked', total != 0);
	$('#licenses_windows_check').attr('disabled', total == 0);
	updateLicensesWindows($('#licenses_windows_check').attr('checked'));
}/*}}}*/

/*{{{ updateExchangeLicenseCount() */
var updateExchangeLicenseCount = function() {
	var total = 0;

	$.each(exchangeServerLicenses, function(item, value) {
		total += value;
	});

	// If SBS, zero out Exchange licenses
	if (isSBS()) {
		total = 0;
	}

	$('#licenses_exchange span.count').text('(' + total + ') ');
	$('#licenses_exchange_check').attr('checked', total != 0);
	$('#licenses_exchange_check').attr('disabled', total == 0);
	updateLicensesExchange($('#licenses_exchange_check').attr('checked'));
}/*}}}*/

/* {{{ Update User Counts - these handle update the counts related to user licenses */
var updateUserTotalCount = function() {
	$('#num_users').text(mailboxes);
}

var updateUserRackspaceCount = function() {
	$('#userrackspace2 span').text('(' + mailboxes + ') ');
	updateUserRackspace($('#user_rackspace_check').attr('checked'));
}

var updateUserWindowsCount = function() {
	$('#userwindows2 span').text('(' + mailboxes + ') ');
	updateUserWindows($('#user_windows_check').attr('checked'));
}

var updateUserExchangeCount = function() {
	$('#userexchange2 span').text('(' + mailboxes + ') ');
	updateUserExchange($('#user_exchange_check').attr('checked'));
}

var updateUserOutlookCount = function() {
	$('#useroutlook2 span').text('(' + mailboxes + ') ');
	updateUserOutlook($('#user_outlook_check').attr('checked'));
}

var updateUserSbsCount = function() {
	$('#sbs_count').text('(' + mailboxes + ') ');
	updateUserSbs($('#user_sbs_check').attr('checked'));
}

var updateUserBlackberryCount = function() {
	if (blackberry <= 0) {
		$('#user_blackberry_check').attr('disabled', true);
		$('#user_blackberry_check').attr('checked', false);
	} else {
		$('#user_blackberry_check').attr('disabled', false);
	}

	$('#userblackberry2 span').text('(' + blackberry + ') ');
	updateUserBlackberry($('#user_blackberry_check').attr('checked'));
}

var updateUserAntivirusCount = function() {
	$('#userantivirus2 span.count').text('(' + mailboxes + ') ');
	updateUserAntivirus($('#user_antivirus_check').attr('checked'));
}
/*}}}*/

/* {{{ updateCostsHostingCount() - handles updating counts related to costs*/
var updateCostsHostingCount = function() {
	var total = 0;

	$.each(servers, function(item, value) {
		total += value;
	});

	$('#costshosting2').text(total);
	if (total == 1) {
		$('#costshostingServers').text('Server');
	} else {
		$('#costshostingServers').text('Servers');
	}
	updateCostsHosting($('#costs_hosting_check').attr('checked'));
}
/*}}}*/
/*}}}*/

/*{{{ addCommas() - adds commas to format a number like 100,000 */
function addCommas(nStr) {
	nStr += '';
	x = nStr.split('.');
	x1 = x[0];
	x2 = x.length > 1 ? '.' + x[1] : '';
	var rgx = /(\d+)(\d{3})/;
	while (rgx.test(x1)) {
		x1 = x1.replace(rgx, '$1' + ',' + '$2');
	}
	return x1 + x2;
}/*}}}*/

/*{{{ dollarToInt() - strips the string of dollar signs, commas, and periods */
var dollarToInt = function(dollar) {
	var newInt = parseInt(dollar.replace(/[^\d\.]/g, ''));
	if (isNaN(newInt)){
			newInt = 0;
	}
	return newInt;
};/*}}}*/

// {{{ getIntFromInput()
/**
 * Gets an integer from an input field, or 0 if result is NaN.
 *
 * @param	{String}	selector	jQuery selector string for input
 */
var getIntFromInput = function (selector) {
	var parsed = parseInt($(selector).val());
	var rv = 0;
	if (!isNaN(parsed)) {
		rv = parsed;
	}

	return rv;
};

// }}}

// {{{ isSectionOpen()
/**
 * Determines if a section is closed by its indicator image source
 */
var isSectionOpen = function (section) {
	return ($('#' + section + '_totals img').attr('src') == minus);
}
// }}}

// {{{ isSBS()
/**
 * Whether this qualifies for SBS pricing
 */
var isSBS = function() {
	//return (mailboxes <= 25);
	return false;
}
// }}}

/* }}} */
