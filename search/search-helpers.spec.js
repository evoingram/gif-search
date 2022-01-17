const SearchHelpers = require('./search-helpers.js');

describe('search helpers', function () {
	it('should return modified search results', function () {
		const giphyModified5Results = {
			data: [
				{
					gif_id: 'GVaknm5baLdAc',
					url: 'https://giphy.com/gifs/GVaknm5baLdAc'
				},
				{
					gif_id: 'uQvxobRExS9nG',
					url: 'https://giphy.com/gifs/oktotally-cheeseburger-sassy-oktotally-uQvxobRExS9nG'
				},
				{
					gif_id: '1Fjxzv70Zvyqk',
					url: 'https://giphy.com/gifs/shakingfoodgifs-cheeseburger-shaking-food-1Fjxzv70Zvyqk'
				},
				{
					gif_id: 'KpLPyE3D6HJPa',
					url: 'https://giphy.com/gifs/mcdonalds-food-cheeseburger-KpLPyE3D6HJPa'
				},
				{
					gif_id: 'YDVrp1M0myCQ',
					url: 'https://giphy.com/gifs/cheeseburger-food-YDVrp1M0myCQ'
				}
			]
		};
		const giphyUnmodified5Results = {
			data: [
				{
					type: 'gif',
					id: 'GVaknm5baLdAc',
					url: 'https://giphy.com/gifs/GVaknm5baLdAc',
					slug: 'GVaknm5baLdAc',
					bitly_gif_url: 'http://gph.is/29btpUK',
					bitly_url: 'http://gph.is/29btpUK',
					embed_url: 'https://giphy.com/embed/GVaknm5baLdAc',
					username: '',
					source: 'http://imgur.com/gallery/QxVW0Go',
					title: 'hamburgers GIF',
					rating: 'g',
					content_url: '',
					source_tld: 'imgur.com',
					source_post_url: 'http://imgur.com/gallery/QxVW0Go',
					is_sticker: 0,
					import_datetime: '2016-06-29 20:05:26',
					trending_datetime: '1970-01-01 00:00:00',
					images: {
						original: {
							height: '450',
							width: '500',
							size: '2925352',
							url: 'https://media4.giphy.com/media/GVaknm5baLdAc/giphy.gif?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=giphy.gif&ct=g',
							mp4_size: '2032182',
							mp4: 'https://media4.giphy.com/media/GVaknm5baLdAc/giphy.mp4?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=giphy.mp4&ct=g',
							webp_size: '1722018',
							webp: 'https://media4.giphy.com/media/GVaknm5baLdAc/giphy.webp?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=giphy.webp&ct=g',
							frames: '23',
							hash: '059a31636f0eebd49ea7cd026bbaa8c0'
						},
						downsized: {
							height: '450',
							width: '500',
							size: '1984587',
							url: 'https://media4.giphy.com/media/GVaknm5baLdAc/giphy-downsized.gif?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=giphy-downsized.gif&ct=g'
						},
						downsized_large: {
							height: '450',
							width: '500',
							size: '2925352',
							url: 'https://media4.giphy.com/media/GVaknm5baLdAc/giphy.gif?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=giphy.gif&ct=g'
						},
						downsized_medium: {
							height: '450',
							width: '500',
							size: '2925352',
							url: 'https://media4.giphy.com/media/GVaknm5baLdAc/giphy.gif?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=giphy.gif&ct=g'
						},
						downsized_small: {
							height: '178',
							width: '197',
							mp4_size: '182535',
							mp4: 'https://media4.giphy.com/media/GVaknm5baLdAc/giphy-downsized-small.mp4?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=giphy-downsized-small.mp4&ct=g'
						},
						downsized_still: {
							height: '450',
							width: '500',
							size: '89882',
							url: 'https://media4.giphy.com/media/GVaknm5baLdAc/giphy-downsized_s.gif?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=giphy-downsized_s.gif&ct=g'
						},
						fixed_height: {
							height: '200',
							width: '222',
							size: '552015',
							url: 'https://media4.giphy.com/media/GVaknm5baLdAc/200.gif?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=200.gif&ct=g',
							mp4_size: '329877',
							mp4: 'https://media4.giphy.com/media/GVaknm5baLdAc/200.mp4?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=200.mp4&ct=g',
							webp_size: '263772',
							webp: 'https://media4.giphy.com/media/GVaknm5baLdAc/200.webp?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=200.webp&ct=g'
						},
						fixed_height_downsampled: {
							height: '200',
							width: '222',
							size: '154117',
							url: 'https://media4.giphy.com/media/GVaknm5baLdAc/200_d.gif?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=200_d.gif&ct=g',
							webp_size: '86912',
							webp: 'https://media4.giphy.com/media/GVaknm5baLdAc/200_d.webp?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=200_d.webp&ct=g'
						},
						fixed_height_small: {
							height: '100',
							width: '111',
							size: '170206',
							url: 'https://media4.giphy.com/media/GVaknm5baLdAc/100.gif?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=100.gif&ct=g',
							mp4_size: '101111',
							mp4: 'https://media4.giphy.com/media/GVaknm5baLdAc/100.mp4?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=100.mp4&ct=g',
							webp_size: '88194',
							webp: 'https://media4.giphy.com/media/GVaknm5baLdAc/100.webp?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=100.webp&ct=g'
						},
						fixed_height_small_still: {
							height: '100',
							width: '111',
							size: '7843',
							url: 'https://media4.giphy.com/media/GVaknm5baLdAc/100_s.gif?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=100_s.gif&ct=g'
						},
						fixed_height_still: {
							height: '200',
							width: '222',
							size: '25220',
							url: 'https://media4.giphy.com/media/GVaknm5baLdAc/200_s.gif?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=200_s.gif&ct=g'
						},
						fixed_width: {
							height: '180',
							width: '200',
							size: '459200',
							url: 'https://media4.giphy.com/media/GVaknm5baLdAc/200w.gif?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=200w.gif&ct=g',
							mp4_size: '277795',
							mp4: 'https://media4.giphy.com/media/GVaknm5baLdAc/200w.mp4?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=200w.mp4&ct=g',
							webp_size: '221794',
							webp: 'https://media4.giphy.com/media/GVaknm5baLdAc/200w.webp?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=200w.webp&ct=g'
						},
						fixed_width_downsampled: {
							height: '180',
							width: '200',
							size: '131186',
							url: 'https://media4.giphy.com/media/GVaknm5baLdAc/200w_d.gif?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=200w_d.gif&ct=g',
							webp_size: '71700',
							webp: 'https://media4.giphy.com/media/GVaknm5baLdAc/200w_d.webp?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=200w_d.webp&ct=g'
						},
						fixed_width_small: {
							height: '90',
							width: '100',
							size: '137813',
							url: 'https://media4.giphy.com/media/GVaknm5baLdAc/100w.gif?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=100w.gif&ct=g',
							mp4_size: '47292',
							mp4: 'https://media4.giphy.com/media/GVaknm5baLdAc/100w.mp4?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=100w.mp4&ct=g',
							webp_size: '76060',
							webp: 'https://media4.giphy.com/media/GVaknm5baLdAc/100w.webp?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=100w.webp&ct=g'
						},
						fixed_width_small_still: {
							height: '90',
							width: '100',
							size: '6615',
							url: 'https://media4.giphy.com/media/GVaknm5baLdAc/100w_s.gif?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=100w_s.gif&ct=g'
						},
						fixed_width_still: {
							height: '180',
							width: '200',
							size: '20896',
							url: 'https://media4.giphy.com/media/GVaknm5baLdAc/200w_s.gif?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=200w_s.gif&ct=g'
						},
						looping: {
							mp4_size: '5298049',
							mp4: 'https://media4.giphy.com/media/GVaknm5baLdAc/giphy-loop.mp4?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=giphy-loop.mp4&ct=g'
						},
						original_still: {
							height: '450',
							width: '500',
							size: '127502',
							url: 'https://media4.giphy.com/media/GVaknm5baLdAc/giphy_s.gif?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=giphy_s.gif&ct=g'
						},
						original_mp4: {
							height: '432',
							width: '480',
							mp4_size: '2032182',
							mp4: 'https://media4.giphy.com/media/GVaknm5baLdAc/giphy.mp4?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=giphy.mp4&ct=g'
						},
						preview: {
							height: '134',
							width: '148',
							mp4_size: '44312',
							mp4: 'https://media4.giphy.com/media/GVaknm5baLdAc/giphy-preview.mp4?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=giphy-preview.mp4&ct=g'
						},
						preview_gif: {
							height: '102',
							width: '113',
							size: '47687',
							url: 'https://media4.giphy.com/media/GVaknm5baLdAc/giphy-preview.gif?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=giphy-preview.gif&ct=g'
						},
						preview_webp: {
							height: '108',
							width: '120',
							size: '23272',
							url: 'https://media4.giphy.com/media/GVaknm5baLdAc/giphy-preview.webp?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=giphy-preview.webp&ct=g'
						},
						'480w_still': {
							height: '432',
							width: '480',
							size: '2925352',
							url: 'https://media4.giphy.com/media/GVaknm5baLdAc/480w_s.jpg?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=480w_s.jpg&ct=g'
						}
					},
					analytics_response_payload: 'e=Z2lmX2lkPUdWYWtubTViYUxkQWMmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD1kZmJiNjI2NnV2dGUxYXMwYXFmM28yNGJ5dDU3Z2w4aTB0eWZyN2c3YWN2Yzloa3UmY3Q9Zw',
					analytics: {
						onload: {
							url: 'https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPUdWYWtubTViYUxkQWMmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD1kZmJiNjI2NnV2dGUxYXMwYXFmM28yNGJ5dDU3Z2w4aTB0eWZyN2c3YWN2Yzloa3UmY3Q9Zw&action_type=SEEN'
						},
						onclick: {
							url: 'https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPUdWYWtubTViYUxkQWMmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD1kZmJiNjI2NnV2dGUxYXMwYXFmM28yNGJ5dDU3Z2w4aTB0eWZyN2c3YWN2Yzloa3UmY3Q9Zw&action_type=CLICK'
						},
						onsent: {
							url: 'https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPUdWYWtubTViYUxkQWMmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD1kZmJiNjI2NnV2dGUxYXMwYXFmM28yNGJ5dDU3Z2w4aTB0eWZyN2c3YWN2Yzloa3UmY3Q9Zw&action_type=SENT'
						}
					}
				},
				{
					type: 'gif',
					id: 'uQvxobRExS9nG',
					url: 'https://giphy.com/gifs/oktotally-cheeseburger-sassy-oktotally-uQvxobRExS9nG',
					slug: 'oktotally-cheeseburger-sassy-oktotally-uQvxobRExS9nG',
					bitly_gif_url: 'http://gph.is/XM5K1k',
					bitly_url: 'http://gph.is/XM5K1k',
					embed_url: 'https://giphy.com/embed/uQvxobRExS9nG',
					username: 'oktotally',
					source: 'http://oktotally.tumblr.com/post/18091086011/ill-just-leave-this-here',
					title: 'sassy cheeseburger GIF',
					rating: 'g',
					content_url: '',
					source_tld: 'oktotally.tumblr.com',
					source_post_url: 'http://oktotally.tumblr.com/post/18091086011/ill-just-leave-this-here',
					is_sticker: 0,
					import_datetime: '2012-02-22 22:16:56',
					trending_datetime: '1970-01-01 00:00:00',
					images: {
						original: {
							height: '337',
							width: '420',
							size: '75365',
							url: 'https://media4.giphy.com/media/uQvxobRExS9nG/giphy.gif?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=giphy.gif&ct=g',
							mp4_size: '27848',
							mp4: 'https://media4.giphy.com/media/uQvxobRExS9nG/giphy.mp4?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=giphy.mp4&ct=g',
							webp_size: '32766',
							webp: 'https://media4.giphy.com/media/uQvxobRExS9nG/giphy.webp?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=giphy.webp&ct=g',
							frames: '2',
							hash: '391ed2fee59db0f444ad61d64353a4c2'
						},
						downsized: {
							height: '337',
							width: '420',
							size: '75365',
							url: 'https://media4.giphy.com/media/uQvxobRExS9nG/giphy.gif?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=giphy.gif&ct=g'
						},
						downsized_large: {
							height: '337',
							width: '420',
							size: '75365',
							url: 'https://media4.giphy.com/media/uQvxobRExS9nG/giphy.gif?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=giphy.gif&ct=g'
						},
						downsized_medium: {
							height: '337',
							width: '420',
							size: '75365',
							url: 'https://media4.giphy.com/media/uQvxobRExS9nG/giphy.gif?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=giphy.gif&ct=g'
						},
						downsized_small: {
							height: '336',
							width: '420',
							mp4_size: '23237',
							mp4: 'https://media4.giphy.com/media/uQvxobRExS9nG/giphy-downsized-small.mp4?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=giphy-downsized-small.mp4&ct=g'
						},
						downsized_still: {
							height: '337',
							width: '420',
							size: '75365',
							url: 'https://media4.giphy.com/media/uQvxobRExS9nG/giphy_s.gif?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=giphy_s.gif&ct=g'
						},
						fixed_height: {
							height: '200',
							width: '249',
							size: '24983',
							url: 'https://media4.giphy.com/media/uQvxobRExS9nG/200.gif?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=200.gif&ct=g',
							mp4_size: '9506',
							mp4: 'https://media4.giphy.com/media/uQvxobRExS9nG/200.mp4?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=200.mp4&ct=g',
							webp_size: '13434',
							webp: 'https://media4.giphy.com/media/uQvxobRExS9nG/200.webp?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=200.webp&ct=g'
						},
						fixed_height_downsampled: {
							height: '200',
							width: '249',
							size: '24983',
							url: 'https://media4.giphy.com/media/uQvxobRExS9nG/200_d.gif?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=200_d.gif&ct=g',
							webp_size: '15756',
							webp: 'https://media4.giphy.com/media/uQvxobRExS9nG/200_d.webp?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=200_d.webp&ct=g'
						},
						fixed_height_small: {
							height: '100',
							width: '125',
							size: '8512',
							url: 'https://media4.giphy.com/media/uQvxobRExS9nG/100.gif?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=100.gif&ct=g',
							mp4_size: '4278',
							mp4: 'https://media4.giphy.com/media/uQvxobRExS9nG/100.mp4?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=100.mp4&ct=g',
							webp_size: '5152',
							webp: 'https://media4.giphy.com/media/uQvxobRExS9nG/100.webp?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=100.webp&ct=g'
						},
						fixed_height_small_still: {
							height: '100',
							width: '125',
							size: '4831',
							url: 'https://media4.giphy.com/media/uQvxobRExS9nG/100_s.gif?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=100_s.gif&ct=g'
						},
						fixed_height_still: {
							height: '200',
							width: '249',
							size: '12689',
							url: 'https://media4.giphy.com/media/uQvxobRExS9nG/200_s.gif?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=200_s.gif&ct=g'
						},
						fixed_width: {
							height: '160',
							width: '200',
							size: '17012',
							url: 'https://media4.giphy.com/media/uQvxobRExS9nG/200w.gif?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=200w.gif&ct=g',
							mp4_size: '6986',
							mp4: 'https://media4.giphy.com/media/uQvxobRExS9nG/200w.mp4?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=200w.mp4&ct=g',
							webp_size: '9624',
							webp: 'https://media4.giphy.com/media/uQvxobRExS9nG/200w.webp?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=200w.webp&ct=g'
						},
						fixed_width_downsampled: {
							height: '160',
							width: '200',
							size: '17012',
							url: 'https://media4.giphy.com/media/uQvxobRExS9nG/200w_d.gif?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=200w_d.gif&ct=g',
							webp_size: '11138',
							webp: 'https://media4.giphy.com/media/uQvxobRExS9nG/200w_d.webp?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=200w_d.webp&ct=g'
						},
						fixed_width_small: {
							height: '80',
							width: '100',
							size: '6297',
							url: 'https://media4.giphy.com/media/uQvxobRExS9nG/100w.gif?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=100w.gif&ct=g',
							mp4_size: '3665',
							mp4: 'https://media4.giphy.com/media/uQvxobRExS9nG/100w.mp4?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=100w.mp4&ct=g',
							webp_size: '3822',
							webp: 'https://media4.giphy.com/media/uQvxobRExS9nG/100w.webp?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=100w.webp&ct=g'
						},
						fixed_width_small_still: {
							height: '80',
							width: '100',
							size: '3640',
							url: 'https://media4.giphy.com/media/uQvxobRExS9nG/100w_s.gif?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=100w_s.gif&ct=g'
						},
						fixed_width_still: {
							height: '160',
							width: '200',
							size: '10747',
							url: 'https://media4.giphy.com/media/uQvxobRExS9nG/200w_s.gif?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=200w_s.gif&ct=g'
						},
						looping: {
							mp4_size: '1677395',
							mp4: 'https://media4.giphy.com/media/uQvxobRExS9nG/giphy-loop.mp4?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=giphy-loop.mp4&ct=g'
						},
						original_still: {
							height: '337',
							width: '420',
							size: '48987',
							url: 'https://media4.giphy.com/media/uQvxobRExS9nG/giphy_s.gif?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=giphy_s.gif&ct=g'
						},
						original_mp4: {
							height: '384',
							width: '480',
							mp4_size: '27848',
							mp4: 'https://media4.giphy.com/media/uQvxobRExS9nG/giphy.mp4?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=giphy.mp4&ct=g'
						},
						preview: {
							height: '336',
							width: '420',
							mp4_size: '23237',
							mp4: 'https://media4.giphy.com/media/uQvxobRExS9nG/giphy-preview.mp4?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=giphy-preview.mp4&ct=g'
						},
						preview_gif: {
							height: '337',
							width: '420',
							size: '42209',
							url: 'https://media4.giphy.com/media/uQvxobRExS9nG/giphy-preview.gif?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=giphy-preview.gif&ct=g'
						},
						preview_webp: {
							height: '337',
							width: '420',
							size: '32766',
							url: 'https://media4.giphy.com/media/uQvxobRExS9nG/giphy-preview.webp?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=giphy-preview.webp&ct=g'
						},
						'480w_still': {
							height: '385',
							width: '480',
							size: '75365',
							url: 'https://media4.giphy.com/media/uQvxobRExS9nG/480w_s.jpg?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=480w_s.jpg&ct=g'
						}
					},
					user: {
						avatar_url: 'https://media2.giphy.com/avatars/oktotally.gif',
						banner_image: '',
						banner_url: '',
						profile_url: 'https://giphy.com/oktotally/',
						username: 'oktotally',
						display_name: 'Andy Helms',
						description: '',
						instagram_url: 'https://instagram.com/oktotally',
						website_url: 'http://oktotally.ztyk.ru',
						is_verified: true
					},
					analytics_response_payload: 'e=Z2lmX2lkPXVRdnhvYlJFeFM5bkcmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD1kZmJiNjI2NnV2dGUxYXMwYXFmM28yNGJ5dDU3Z2w4aTB0eWZyN2c3YWN2Yzloa3UmY3Q9Zw',
					analytics: {
						onload: {
							url: 'https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPXVRdnhvYlJFeFM5bkcmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD1kZmJiNjI2NnV2dGUxYXMwYXFmM28yNGJ5dDU3Z2w4aTB0eWZyN2c3YWN2Yzloa3UmY3Q9Zw&action_type=SEEN'
						},
						onclick: {
							url: 'https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPXVRdnhvYlJFeFM5bkcmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD1kZmJiNjI2NnV2dGUxYXMwYXFmM28yNGJ5dDU3Z2w4aTB0eWZyN2c3YWN2Yzloa3UmY3Q9Zw&action_type=CLICK'
						},
						onsent: {
							url: 'https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPXVRdnhvYlJFeFM5bkcmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD1kZmJiNjI2NnV2dGUxYXMwYXFmM28yNGJ5dDU3Z2w4aTB0eWZyN2c3YWN2Yzloa3UmY3Q9Zw&action_type=SENT'
						}
					}
				},
				{
					type: 'gif',
					id: '1Fjxzv70Zvyqk',
					url: 'https://giphy.com/gifs/shakingfoodgifs-cheeseburger-shaking-food-1Fjxzv70Zvyqk',
					slug: 'shakingfoodgifs-cheeseburger-shaking-food-1Fjxzv70Zvyqk',
					bitly_gif_url: 'http://gph.is/11KVyDv',
					bitly_url: 'http://gph.is/11KVyDv',
					embed_url: 'https://giphy.com/embed/1Fjxzv70Zvyqk',
					username: 'shakingfoodgifs',
					source: 'http://shakingfoodgifs.tumblr.com/post/34072448459/by-http-mynameis-sue-tumblr-com',
					title: 'Food Drink Mcdonalds GIF by Shaking Food GIFs',
					rating: 'g',
					content_url: '',
					source_tld: 'shakingfoodgifs.tumblr.com',
					source_post_url: 'http://shakingfoodgifs.tumblr.com/post/34072448459/by-http-mynameis-sue-tumblr-com',
					is_sticker: 0,
					import_datetime: '2012-10-22 01:17:23',
					trending_datetime: '2016-03-15 05:00:01',
					images: {
						original: {
							height: '480',
							width: '349',
							size: '150565',
							url: 'https://media4.giphy.com/media/1Fjxzv70Zvyqk/giphy.gif?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=giphy.gif&ct=g',
							mp4_size: '71673',
							mp4: 'https://media4.giphy.com/media/1Fjxzv70Zvyqk/giphy.mp4?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=giphy.mp4&ct=g',
							webp_size: '60902',
							webp: 'https://media4.giphy.com/media/1Fjxzv70Zvyqk/giphy.webp?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=giphy.webp&ct=g',
							frames: '4',
							hash: 'c490841842c2707c0b01ca60f55042e1'
						},
						downsized: {
							height: '480',
							width: '349',
							size: '150565',
							url: 'https://media4.giphy.com/media/1Fjxzv70Zvyqk/giphy.gif?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=giphy.gif&ct=g'
						},
						downsized_large: {
							height: '480',
							width: '349',
							size: '150565',
							url: 'https://media4.giphy.com/media/1Fjxzv70Zvyqk/giphy.gif?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=giphy.gif&ct=g'
						},
						downsized_medium: {
							height: '480',
							width: '349',
							size: '150565',
							url: 'https://media4.giphy.com/media/1Fjxzv70Zvyqk/giphy.gif?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=giphy.gif&ct=g'
						},
						downsized_small: {
							height: '480',
							width: '348',
							mp4_size: '41810',
							mp4: 'https://media4.giphy.com/media/1Fjxzv70Zvyqk/giphy-downsized-small.mp4?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=giphy-downsized-small.mp4&ct=g'
						},
						downsized_still: {
							height: '480',
							width: '349',
							size: '150565',
							url: 'https://media4.giphy.com/media/1Fjxzv70Zvyqk/giphy_s.gif?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=giphy_s.gif&ct=g'
						},
						fixed_height: {
							height: '200',
							width: '145',
							size: '34997',
							url: 'https://media4.giphy.com/media/1Fjxzv70Zvyqk/200.gif?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=200.gif&ct=g',
							mp4_size: '7033',
							mp4: 'https://media4.giphy.com/media/1Fjxzv70Zvyqk/200.mp4?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=200.mp4&ct=g',
							webp_size: '13538',
							webp: 'https://media4.giphy.com/media/1Fjxzv70Zvyqk/200.webp?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=200.webp&ct=g'
						},
						fixed_height_downsampled: {
							height: '200',
							width: '145',
							size: '34997',
							url: 'https://media4.giphy.com/media/1Fjxzv70Zvyqk/200_d.gif?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=200_d.gif&ct=g',
							webp_size: '14142',
							webp: 'https://media4.giphy.com/media/1Fjxzv70Zvyqk/200_d.webp?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=200_d.webp&ct=g'
						},
						fixed_height_small: {
							height: '100',
							width: '73',
							size: '8886',
							url: 'https://media4.giphy.com/media/1Fjxzv70Zvyqk/100.gif?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=100.gif&ct=g',
							mp4_size: '3219',
							mp4: 'https://media4.giphy.com/media/1Fjxzv70Zvyqk/100.mp4?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=100.mp4&ct=g',
							webp_size: '4438',
							webp: 'https://media4.giphy.com/media/1Fjxzv70Zvyqk/100.webp?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=100.webp&ct=g'
						},
						fixed_height_small_still: {
							height: '100',
							width: '73',
							size: '3125',
							url: 'https://media4.giphy.com/media/1Fjxzv70Zvyqk/100_s.gif?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=100_s.gif&ct=g'
						},
						fixed_height_still: {
							height: '200',
							width: '145',
							size: '8584',
							url: 'https://media4.giphy.com/media/1Fjxzv70Zvyqk/200_s.gif?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=200_s.gif&ct=g'
						},
						fixed_width: {
							height: '275',
							width: '200',
							size: '56149',
							url: 'https://media4.giphy.com/media/1Fjxzv70Zvyqk/200w.gif?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=200w.gif&ct=g',
							mp4_size: '11544',
							mp4: 'https://media4.giphy.com/media/1Fjxzv70Zvyqk/200w.mp4?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=200w.mp4&ct=g',
							webp_size: '23418',
							webp: 'https://media4.giphy.com/media/1Fjxzv70Zvyqk/200w.webp?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=200w.webp&ct=g'
						},
						fixed_width_downsampled: {
							height: '275',
							width: '200',
							size: '56149',
							url: 'https://media4.giphy.com/media/1Fjxzv70Zvyqk/200w_d.gif?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=200w_d.gif&ct=g',
							webp_size: '24092',
							webp: 'https://media4.giphy.com/media/1Fjxzv70Zvyqk/200w_d.webp?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=200w_d.webp&ct=g'
						},
						fixed_width_small: {
							height: '138',
							width: '100',
							size: '14191',
							url: 'https://media4.giphy.com/media/1Fjxzv70Zvyqk/100w.gif?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=100w.gif&ct=g',
							mp4_size: '4092',
							mp4: 'https://media4.giphy.com/media/1Fjxzv70Zvyqk/100w.mp4?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=100w.mp4&ct=g',
							webp_size: '7616',
							webp: 'https://media4.giphy.com/media/1Fjxzv70Zvyqk/100w.webp?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=100w.webp&ct=g'
						},
						fixed_width_small_still: {
							height: '138',
							width: '100',
							size: '4605',
							url: 'https://media4.giphy.com/media/1Fjxzv70Zvyqk/100w_s.gif?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=100w_s.gif&ct=g'
						},
						fixed_width_still: {
							height: '275',
							width: '200',
							size: '12198',
							url: 'https://media4.giphy.com/media/1Fjxzv70Zvyqk/200w_s.gif?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=200w_s.gif&ct=g'
						},
						looping: {
							mp4_size: '1270419',
							mp4: 'https://media4.giphy.com/media/1Fjxzv70Zvyqk/giphy-loop.mp4?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=giphy-loop.mp4&ct=g'
						},
						original_still: {
							height: '480',
							width: '349',
							size: '46320',
							url: 'https://media4.giphy.com/media/1Fjxzv70Zvyqk/giphy_s.gif?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=giphy_s.gif&ct=g'
						},
						original_mp4: {
							height: '660',
							width: '480',
							mp4_size: '71673',
							mp4: 'https://media4.giphy.com/media/1Fjxzv70Zvyqk/giphy.mp4?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=giphy.mp4&ct=g'
						},
						preview: {
							height: '480',
							width: '348',
							mp4_size: '41810',
							mp4: 'https://media4.giphy.com/media/1Fjxzv70Zvyqk/giphy-preview.mp4?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=giphy-preview.mp4&ct=g'
						},
						preview_gif: {
							height: '210',
							width: '153',
							size: '49562',
							url: 'https://media4.giphy.com/media/1Fjxzv70Zvyqk/giphy-preview.gif?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=giphy-preview.gif&ct=g'
						},
						preview_webp: {
							height: '414',
							width: '302',
							size: '46510',
							url: 'https://media4.giphy.com/media/1Fjxzv70Zvyqk/giphy-preview.webp?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=giphy-preview.webp&ct=g'
						},
						'480w_still': {
							height: '660',
							width: '480',
							size: '150565',
							url: 'https://media4.giphy.com/media/1Fjxzv70Zvyqk/480w_s.jpg?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=480w_s.jpg&ct=g'
						}
					},
					user: {
						avatar_url: 'https://media3.giphy.com/avatars/shakingfoodgifs/flykX9IFOsC2.jpg',
						banner_image: '',
						banner_url: '',
						profile_url: 'https://giphy.com/shakingfoodgifs/',
						username: 'shakingfoodgifs',
						display_name: 'Shaking Food GIFs',
						description: '"I have the biggest appreciation for pretty foods, bright colors/gradients, and GIFs. I started making a lot of these food GIFs and because of the great response, I decided to cram all of them onto one blog."',
						instagram_url: '',
						website_url: 'http://shakingfoodgifs.tumblr.com',
						is_verified: true
					},
					analytics_response_payload: 'e=Z2lmX2lkPTFGanh6djcwWnZ5cWsmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD1kZmJiNjI2NnV2dGUxYXMwYXFmM28yNGJ5dDU3Z2w4aTB0eWZyN2c3YWN2Yzloa3UmY3Q9Zw',
					analytics: {
						onload: {
							url: 'https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTFGanh6djcwWnZ5cWsmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD1kZmJiNjI2NnV2dGUxYXMwYXFmM28yNGJ5dDU3Z2w4aTB0eWZyN2c3YWN2Yzloa3UmY3Q9Zw&action_type=SEEN'
						},
						onclick: {
							url: 'https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTFGanh6djcwWnZ5cWsmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD1kZmJiNjI2NnV2dGUxYXMwYXFmM28yNGJ5dDU3Z2w4aTB0eWZyN2c3YWN2Yzloa3UmY3Q9Zw&action_type=CLICK'
						},
						onsent: {
							url: 'https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTFGanh6djcwWnZ5cWsmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD1kZmJiNjI2NnV2dGUxYXMwYXFmM28yNGJ5dDU3Z2w4aTB0eWZyN2c3YWN2Yzloa3UmY3Q9Zw&action_type=SENT'
						}
					}
				},
				{
					type: 'gif',
					id: 'KpLPyE3D6HJPa',
					url: 'https://giphy.com/gifs/mcdonalds-food-cheeseburger-KpLPyE3D6HJPa',
					slug: 'mcdonalds-food-cheeseburger-KpLPyE3D6HJPa',
					bitly_gif_url: 'http://gph.is/XK4Z98',
					bitly_url: 'http://gph.is/XK4Z98',
					embed_url: 'https://giphy.com/embed/KpLPyE3D6HJPa',
					username: '',
					source: 'http://allkindofgifsforyou.tumblr.com/post/46347493631/mcdonalds-burgers',
					title: 'mcdonalds GIF',
					rating: 'g',
					content_url: '',
					source_tld: 'allkindofgifsforyou.tumblr.com',
					source_post_url: 'http://allkindofgifsforyou.tumblr.com/post/46347493631/mcdonalds-burgers',
					is_sticker: 0,
					import_datetime: '2013-03-26 23:23:50',
					trending_datetime: '1970-01-01 00:00:00',
					images: {
						original: {
							height: '266',
							width: '400',
							size: '190945',
							url: 'https://media0.giphy.com/media/KpLPyE3D6HJPa/giphy.gif?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=giphy.gif&ct=g',
							mp4_size: '207439',
							mp4: 'https://media0.giphy.com/media/KpLPyE3D6HJPa/giphy.mp4?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=giphy.mp4&ct=g',
							webp_size: '116598',
							webp: 'https://media0.giphy.com/media/KpLPyE3D6HJPa/giphy.webp?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=giphy.webp&ct=g',
							frames: '4',
							hash: '614f550913f43736a889f9c66036cf6a'
						},
						downsized: {
							height: '266',
							width: '400',
							size: '190945',
							url: 'https://media0.giphy.com/media/KpLPyE3D6HJPa/giphy.gif?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=giphy.gif&ct=g'
						},
						downsized_large: {
							height: '266',
							width: '400',
							size: '190945',
							url: 'https://media0.giphy.com/media/KpLPyE3D6HJPa/giphy.gif?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=giphy.gif&ct=g'
						},
						downsized_medium: {
							height: '266',
							width: '400',
							size: '190945',
							url: 'https://media0.giphy.com/media/KpLPyE3D6HJPa/giphy.gif?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=giphy.gif&ct=g'
						},
						downsized_small: {
							height: '266',
							width: '400',
							mp4_size: '167960',
							mp4: 'https://media0.giphy.com/media/KpLPyE3D6HJPa/giphy-downsized-small.mp4?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=giphy-downsized-small.mp4&ct=g'
						},
						downsized_still: {
							height: '266',
							width: '400',
							size: '190945',
							url: 'https://media0.giphy.com/media/KpLPyE3D6HJPa/giphy_s.gif?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=giphy_s.gif&ct=g'
						},
						fixed_height: {
							height: '200',
							width: '301',
							size: '114222',
							url: 'https://media0.giphy.com/media/KpLPyE3D6HJPa/200.gif?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=200.gif&ct=g',
							mp4_size: '78936',
							mp4: 'https://media0.giphy.com/media/KpLPyE3D6HJPa/200.mp4?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=200.mp4&ct=g',
							webp_size: '62218',
							webp: 'https://media0.giphy.com/media/KpLPyE3D6HJPa/200.webp?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=200.webp&ct=g'
						},
						fixed_height_downsampled: {
							height: '200',
							width: '301',
							size: '114222',
							url: 'https://media0.giphy.com/media/KpLPyE3D6HJPa/200_d.gif?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=200_d.gif&ct=g',
							webp_size: '75818',
							webp: 'https://media0.giphy.com/media/KpLPyE3D6HJPa/200_d.webp?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=200_d.webp&ct=g'
						},
						fixed_height_small: {
							height: '100',
							width: '151',
							size: '38402',
							url: 'https://media0.giphy.com/media/KpLPyE3D6HJPa/100.gif?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=100.gif&ct=g',
							mp4_size: '25462',
							mp4: 'https://media0.giphy.com/media/KpLPyE3D6HJPa/100.mp4?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=100.mp4&ct=g',
							webp_size: '20496',
							webp: 'https://media0.giphy.com/media/KpLPyE3D6HJPa/100.webp?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=100.webp&ct=g'
						},
						fixed_height_small_still: {
							height: '100',
							width: '151',
							size: '8997',
							url: 'https://media0.giphy.com/media/KpLPyE3D6HJPa/100_s.gif?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=100_s.gif&ct=g'
						},
						fixed_height_still: {
							height: '200',
							width: '301',
							size: '27087',
							url: 'https://media0.giphy.com/media/KpLPyE3D6HJPa/200_s.gif?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=200_s.gif&ct=g'
						},
						fixed_width: {
							height: '133',
							width: '200',
							size: '66940',
							url: 'https://media0.giphy.com/media/KpLPyE3D6HJPa/200w.gif?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=200w.gif&ct=g',
							mp4_size: '39562',
							mp4: 'https://media0.giphy.com/media/KpLPyE3D6HJPa/200w.mp4?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=200w.mp4&ct=g',
							webp_size: '31760',
							webp: 'https://media0.giphy.com/media/KpLPyE3D6HJPa/200w.webp?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=200w.webp&ct=g'
						},
						fixed_width_downsampled: {
							height: '133',
							width: '200',
							size: '66940',
							url: 'https://media0.giphy.com/media/KpLPyE3D6HJPa/200w_d.gif?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=200w_d.gif&ct=g',
							webp_size: '37344',
							webp: 'https://media0.giphy.com/media/KpLPyE3D6HJPa/200w_d.webp?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=200w_d.webp&ct=g'
						},
						fixed_width_small: {
							height: '67',
							width: '100',
							size: '17530',
							url: 'https://media0.giphy.com/media/KpLPyE3D6HJPa/100w.gif?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=100w.gif&ct=g',
							mp4_size: '14371',
							mp4: 'https://media0.giphy.com/media/KpLPyE3D6HJPa/100w.mp4?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=100w.mp4&ct=g',
							webp_size: '11032',
							webp: 'https://media0.giphy.com/media/KpLPyE3D6HJPa/100w.webp?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=100w.webp&ct=g'
						},
						fixed_width_small_still: {
							height: '67',
							width: '100',
							size: '4703',
							url: 'https://media0.giphy.com/media/KpLPyE3D6HJPa/100w_s.gif?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=100w_s.gif&ct=g'
						},
						fixed_width_still: {
							height: '133',
							width: '200',
							size: '15895',
							url: 'https://media0.giphy.com/media/KpLPyE3D6HJPa/200w_s.gif?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=200w_s.gif&ct=g'
						},
						looping: {
							mp4_size: '3088701',
							mp4: 'https://media0.giphy.com/media/KpLPyE3D6HJPa/giphy-loop.mp4?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=giphy-loop.mp4&ct=g'
						},
						original_still: {
							height: '266',
							width: '400',
							size: '43188',
							url: 'https://media0.giphy.com/media/KpLPyE3D6HJPa/giphy_s.gif?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=giphy_s.gif&ct=g'
						},
						original_mp4: {
							height: '318',
							width: '480',
							mp4_size: '207439',
							mp4: 'https://media0.giphy.com/media/KpLPyE3D6HJPa/giphy.mp4?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=giphy.mp4&ct=g'
						},
						preview: {
							height: '144',
							width: '216',
							mp4_size: '30178',
							mp4: 'https://media0.giphy.com/media/KpLPyE3D6HJPa/giphy-preview.mp4?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=giphy-preview.mp4&ct=g'
						},
						preview_gif: {
							height: '103',
							width: '155',
							size: '49618',
							url: 'https://media0.giphy.com/media/KpLPyE3D6HJPa/giphy-preview.gif?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=giphy-preview.gif&ct=g'
						},
						preview_webp: {
							height: '144',
							width: '216',
							size: '34714',
							url: 'https://media0.giphy.com/media/KpLPyE3D6HJPa/giphy-preview.webp?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=giphy-preview.webp&ct=g'
						},
						'480w_still': {
							height: '319',
							width: '480',
							size: '190945',
							url: 'https://media0.giphy.com/media/KpLPyE3D6HJPa/480w_s.jpg?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=480w_s.jpg&ct=g'
						}
					},
					analytics_response_payload: 'e=Z2lmX2lkPUtwTFB5RTNENkhKUGEmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD1kZmJiNjI2NnV2dGUxYXMwYXFmM28yNGJ5dDU3Z2w4aTB0eWZyN2c3YWN2Yzloa3UmY3Q9Zw',
					analytics: {
						onload: {
							url: 'https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPUtwTFB5RTNENkhKUGEmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD1kZmJiNjI2NnV2dGUxYXMwYXFmM28yNGJ5dDU3Z2w4aTB0eWZyN2c3YWN2Yzloa3UmY3Q9Zw&action_type=SEEN'
						},
						onclick: {
							url: 'https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPUtwTFB5RTNENkhKUGEmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD1kZmJiNjI2NnV2dGUxYXMwYXFmM28yNGJ5dDU3Z2w4aTB0eWZyN2c3YWN2Yzloa3UmY3Q9Zw&action_type=CLICK'
						},
						onsent: {
							url: 'https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPUtwTFB5RTNENkhKUGEmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD1kZmJiNjI2NnV2dGUxYXMwYXFmM28yNGJ5dDU3Z2w4aTB0eWZyN2c3YWN2Yzloa3UmY3Q9Zw&action_type=SENT'
						}
					}
				},
				{
					type: 'gif',
					id: 'YDVrp1M0myCQ',
					url: 'https://giphy.com/gifs/cheeseburger-food-YDVrp1M0myCQ',
					slug: 'cheeseburger-food-YDVrp1M0myCQ',
					bitly_gif_url: 'http://gph.is/VwBghy',
					bitly_url: 'http://gph.is/VwBghy',
					embed_url: 'https://giphy.com/embed/YDVrp1M0myCQ',
					username: '',
					source: 'http://second-impact.tumblr.com/post/7372076237',
					title: 'cheeseburger GIF',
					rating: 'g',
					content_url: '',
					source_tld: '',
					source_post_url: 'http://second-impact.tumblr.com/post/7372076237',
					is_sticker: 0,
					import_datetime: '1970-01-01 00:00:00',
					trending_datetime: '1970-01-01 00:00:00',
					images: {
						original: {
							height: '326',
							width: '480',
							size: '351849',
							url: 'https://media3.giphy.com/media/YDVrp1M0myCQ/giphy.gif?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=giphy.gif&ct=g',
							mp4_size: '146003',
							mp4: 'https://media3.giphy.com/media/YDVrp1M0myCQ/giphy.mp4?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=giphy.mp4&ct=g',
							webp_size: '132414',
							webp: 'https://media3.giphy.com/media/YDVrp1M0myCQ/giphy.webp?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=giphy.webp&ct=g',
							frames: '10',
							hash: '382902c2dc3dba843e29815d36699024'
						},
						downsized: {
							height: '326',
							width: '480',
							size: '351849',
							url: 'https://media3.giphy.com/media/YDVrp1M0myCQ/giphy.gif?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=giphy.gif&ct=g'
						},
						downsized_large: {
							height: '326',
							width: '480',
							size: '351849',
							url: 'https://media3.giphy.com/media/YDVrp1M0myCQ/giphy.gif?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=giphy.gif&ct=g'
						},
						downsized_medium: {
							height: '326',
							width: '480',
							size: '351849',
							url: 'https://media3.giphy.com/media/YDVrp1M0myCQ/giphy.gif?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=giphy.gif&ct=g'
						},
						downsized_small: {
							height: '326',
							width: '480',
							mp4_size: '169342',
							mp4: 'https://media3.giphy.com/media/YDVrp1M0myCQ/giphy-downsized-small.mp4?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=giphy-downsized-small.mp4&ct=g'
						},
						downsized_still: {
							height: '326',
							width: '480',
							size: '351849',
							url: 'https://media3.giphy.com/media/YDVrp1M0myCQ/giphy_s.gif?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=giphy_s.gif&ct=g'
						},
						fixed_height: {
							height: '200',
							width: '294',
							size: '104731',
							url: 'https://media3.giphy.com/media/YDVrp1M0myCQ/200.gif?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=200.gif&ct=g',
							mp4_size: '50383',
							mp4: 'https://media3.giphy.com/media/YDVrp1M0myCQ/200.mp4?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=200.mp4&ct=g',
							webp_size: '53316',
							webp: 'https://media3.giphy.com/media/YDVrp1M0myCQ/200.webp?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=200.webp&ct=g'
						},
						fixed_height_downsampled: {
							height: '200',
							width: '294',
							size: '75439',
							url: 'https://media3.giphy.com/media/YDVrp1M0myCQ/200_d.gif?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=200_d.gif&ct=g',
							webp_size: '48264',
							webp: 'https://media3.giphy.com/media/YDVrp1M0myCQ/200_d.webp?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=200_d.webp&ct=g'
						},
						fixed_height_small: {
							height: '100',
							width: '147',
							size: '32211',
							url: 'https://media3.giphy.com/media/YDVrp1M0myCQ/100.gif?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=100.gif&ct=g',
							mp4_size: '19568',
							mp4: 'https://media3.giphy.com/media/YDVrp1M0myCQ/100.mp4?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=100.mp4&ct=g',
							webp_size: '18820',
							webp: 'https://media3.giphy.com/media/YDVrp1M0myCQ/100.webp?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=100.webp&ct=g'
						},
						fixed_height_small_still: {
							height: '100',
							width: '147',
							size: '8424',
							url: 'https://media3.giphy.com/media/YDVrp1M0myCQ/100_s.gif?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=100_s.gif&ct=g'
						},
						fixed_height_still: {
							height: '200',
							width: '294',
							size: '24666',
							url: 'https://media3.giphy.com/media/YDVrp1M0myCQ/200_s.gif?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=200_s.gif&ct=g'
						},
						fixed_width: {
							height: '136',
							width: '200',
							size: '52221',
							url: 'https://media3.giphy.com/media/YDVrp1M0myCQ/200w.gif?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=200w.gif&ct=g',
							mp4_size: '25306',
							mp4: 'https://media3.giphy.com/media/YDVrp1M0myCQ/200w.mp4?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=200w.mp4&ct=g',
							webp_size: '29108',
							webp: 'https://media3.giphy.com/media/YDVrp1M0myCQ/200w.webp?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=200w.webp&ct=g'
						},
						fixed_width_downsampled: {
							height: '136',
							width: '200',
							size: '34268',
							url: 'https://media3.giphy.com/media/YDVrp1M0myCQ/200w_d.gif?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=200w_d.gif&ct=g',
							webp_size: '25272',
							webp: 'https://media3.giphy.com/media/YDVrp1M0myCQ/200w_d.webp?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=200w_d.webp&ct=g'
						},
						fixed_width_small: {
							height: '68',
							width: '100',
							size: '17883',
							url: 'https://media3.giphy.com/media/YDVrp1M0myCQ/100w.gif?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=100w.gif&ct=g',
							mp4_size: '10468',
							mp4: 'https://media3.giphy.com/media/YDVrp1M0myCQ/100w.mp4?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=100w.mp4&ct=g',
							webp_size: '11740',
							webp: 'https://media3.giphy.com/media/YDVrp1M0myCQ/100w.webp?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=100w.webp&ct=g'
						},
						fixed_width_small_still: {
							height: '68',
							width: '100',
							size: '4488',
							url: 'https://media3.giphy.com/media/YDVrp1M0myCQ/100w_s.gif?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=100w_s.gif&ct=g'
						},
						fixed_width_still: {
							height: '136',
							width: '200',
							size: '16429',
							url: 'https://media3.giphy.com/media/YDVrp1M0myCQ/200w_s.gif?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=200w_s.gif&ct=g'
						},
						looping: {
							mp4_size: '2454382',
							mp4: 'https://media3.giphy.com/media/YDVrp1M0myCQ/giphy-loop.mp4?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=giphy-loop.mp4&ct=g'
						},
						original_still: {
							height: '326',
							width: '480',
							size: '113027',
							url: 'https://media3.giphy.com/media/YDVrp1M0myCQ/giphy_s.gif?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=giphy_s.gif&ct=g'
						},
						original_mp4: {
							height: '326',
							width: '480',
							mp4_size: '146003',
							mp4: 'https://media3.giphy.com/media/YDVrp1M0myCQ/giphy.mp4?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=giphy.mp4&ct=g'
						},
						preview: {
							height: '176',
							width: '259',
							mp4_size: '22615',
							mp4: 'https://media3.giphy.com/media/YDVrp1M0myCQ/giphy-preview.mp4?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=giphy-preview.mp4&ct=g'
						},
						preview_gif: {
							height: '95',
							width: '140',
							size: '48321',
							url: 'https://media3.giphy.com/media/YDVrp1M0myCQ/giphy-preview.gif?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=giphy-preview.gif&ct=g'
						},
						preview_webp: {
							height: '160',
							width: '236',
							size: '37510',
							url: 'https://media3.giphy.com/media/YDVrp1M0myCQ/giphy-preview.webp?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=giphy-preview.webp&ct=g'
						},
						'480w_still': {
							height: '326',
							width: '480',
							size: '351849',
							url: 'https://media3.giphy.com/media/YDVrp1M0myCQ/480w_s.jpg?cid=dfbb6266uvte1as0aqf3o24byt57gl8i0tyfr7g7acvc9hku&rid=480w_s.jpg&ct=g'
						}
					},
					analytics_response_payload: 'e=Z2lmX2lkPVlEVnJwMU0wbXlDUSZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWRmYmI2MjY2dXZ0ZTFhczBhcWYzbzI0Ynl0NTdnbDhpMHR5ZnI3ZzdhY3ZjOWhrdSZjdD1n',
					analytics: {
						onload: {
							url: 'https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPVlEVnJwMU0wbXlDUSZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWRmYmI2MjY2dXZ0ZTFhczBhcWYzbzI0Ynl0NTdnbDhpMHR5ZnI3ZzdhY3ZjOWhrdSZjdD1n&action_type=SEEN'
						},
						onclick: {
							url: 'https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPVlEVnJwMU0wbXlDUSZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWRmYmI2MjY2dXZ0ZTFhczBhcWYzbzI0Ynl0NTdnbDhpMHR5ZnI3ZzdhY3ZjOWhrdSZjdD1n&action_type=CLICK'
						},
						onsent: {
							url: 'https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPVlEVnJwMU0wbXlDUSZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWRmYmI2MjY2dXZ0ZTFhczBhcWYzbzI0Ynl0NTdnbDhpMHR5ZnI3ZzdhY3ZjOWhrdSZjdD1n&action_type=SENT'
						}
					}
				}
			]
		};
		expect(SearchHelpers.modifySearchResults(giphyUnmodified5Results)).toStrictEqual(giphyModified5Results);
	});

	it('should return no modified search results', function () {
		const giphyModifiedNoResults = {
			data: []
		};
		const giphyUnmodifiedNoResults = {
			data: []
		};
		expect(SearchHelpers.modifySearchResults(giphyModifiedNoResults)).toStrictEqual(giphyUnmodifiedNoResults);
	});
});
