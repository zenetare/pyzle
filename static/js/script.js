
                var
                    sourcesSelector = document.body.querySelectorAll('select'),
                    sourcesTotal = sourcesSelector.length
                ;

                for (var i = 0; i < sourcesTotal; i++) {
                    sourcesSelector[i].addEventListener('change', function (e) {
                        var
                            media = e.target.closest('.media-container').querySelector('.mejs__container').id,
                            player = mejs.players[media]
                        ;

                        player.setSrc(e.target.value.replace('&amp;', '&'));
                        player.setPoster('');
                        player.load();

                    });

                    // These media types cannot play at all on iOS, so disabling them
                    if (mejs.Features.isiOS) {
                        if (sourcesSelector[i].querySelector('option[value^="rtmp"]')) {
                            sourcesSelector[i].querySelector('option[value^="rtmp"]').disabled = true;
                        }
                        if (sourcesSelector[i].querySelector('option[value$="webm"]')) {
                            sourcesSelector[i].querySelector('option[value$="webm"]').disabled = true;
                        }
                        if (sourcesSelector[i].querySelector('option[value$=".mpd"]')) {
                            sourcesSelector[i].querySelector('option[value$=".mpd"]').disabled = true;
                        }
                        if (sourcesSelector[i].querySelector('option[value$=".ogg"]')) {
                            sourcesSelector[i].querySelector('option[value$=".ogg"]').disabled = true;
                        }
                        if (sourcesSelector[i].querySelector('option[value$=".flv"]')) {
                            sourcesSelector[i].querySelector('option[value*=".flv"]').disabled = true;
                        }
                    }
                }

                document.addEventListener('DOMContentLoaded', function() {
                    var mediaElements = document.querySelectorAll('video, audio'), total = mediaElements.length;

                    for (var i = 0; i < total; i++) {
                        new MediaElementPlayer(mediaElements[i], {
                            pluginPath: 'https://cdn.jsdelivr.net/npm/mediaelement@4.2.16/build/',
                            shimScriptAccess: 'always',
                            success: function () {
                                var target = document.body.querySelectorAll('.player'), targetTotal = target.length;
                                for (var j = 0; j < targetTotal; j++) {
                                    target[j].style.visibility = 'visible';
                                }
                            }
                        });
                    }
                });