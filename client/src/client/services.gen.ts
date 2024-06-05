// This file is auto-generated by @hey-api/openapi-ts

import { client, type Options, formDataBodySerializer } from '@hey-api/client-fetch';
import type { ReadSongsError, ReadSongsResponse, UpdateSongData, UpdateSongError, UpdateSongResponse, CreateSongData, CreateSongError, CreateSongResponse, ReadGenresError, ReadGenresResponse, UpdateGenreData, UpdateGenreError, UpdateGenreResponse, CreateGenreData, CreateGenreError, CreateGenreResponse, UpdatePostData, UpdatePostError, UpdatePostResponse, UpdateAlbumData, UpdateAlbumError, UpdateAlbumResponse, ServeSongCoverData, ServeSongCoverError, ServeSongCoverResponse, HandleSongCoverUploadData, HandleSongCoverUploadError, HandleSongCoverUploadResponse, ServeSongAudioData, ServeSongAudioError, ServeSongAudioResponse, HandleSongAudioUploadData, HandleSongAudioUploadError, HandleSongAudioUploadResponse, ServeArtistProfileData, ServeArtistProfileError, ServeArtistProfileResponse, HandleArtistProfileUploadData, HandleArtistProfileUploadError, HandleArtistProfileUploadResponse, ServeAlbumCoverData, ServeAlbumCoverError, ServeAlbumCoverResponse, HandleAlbumCoverUploadData, HandleAlbumCoverUploadError, HandleAlbumCoverUploadResponse, ReadArtistsError, ReadArtistsResponse, CreateArtistData, CreateArtistError, CreateArtistResponse, ReadAlbumsError, ReadAlbumsResponse, CreateAlbumData, CreateAlbumError, CreateAlbumResponse, ReadSongData, ReadSongError, ReadSongResponse, DeleteSongData, DeleteSongError, DeleteSongResponse, RecommendationsBasedOnSongData, RecommendationsBasedOnSongError, RecommendationsBasedOnSongResponse, ReadSongsOfGenreData, ReadSongsOfGenreError, ReadSongsOfGenreResponse, ReadSongsOfArtistData, ReadSongsOfArtistError, ReadSongsOfArtistResponse, ReadGenreData, ReadGenreError, ReadGenreResponse, DeleteGenreData, DeleteGenreError, DeleteGenreResponse, ReadArtistData, ReadArtistError, ReadArtistResponse, ReadAlbumData, ReadAlbumError, ReadAlbumResponse, ReadInfoError, ReadInfoResponse, DeleteSong1Data, DeleteSong1Error, DeleteSong1Response, DeleteAlbumData, DeleteAlbumError, DeleteAlbumResponse } from './types.gen';

export const readSongs = (options?: Options) => { return (options?.client ?? client).get<ReadSongsResponse, ReadSongsError>({
    ...options,
    url: '/songs'
}); };

export const updateSong = (options: Options<UpdateSongData>) => { return (options?.client ?? client).put<UpdateSongResponse, UpdateSongError>({
    ...options,
    url: '/songs'
}); };

export const createSong = (options: Options<CreateSongData>) => { return (options?.client ?? client).post<CreateSongResponse, CreateSongError>({
    ...options,
    url: '/songs'
}); };

export const readGenres = (options?: Options) => { return (options?.client ?? client).get<ReadGenresResponse, ReadGenresError>({
    ...options,
    url: '/genres'
}); };

export const updateGenre = (options: Options<UpdateGenreData>) => { return (options?.client ?? client).put<UpdateGenreResponse, UpdateGenreError>({
    ...options,
    url: '/genres'
}); };

export const createGenre = (options: Options<CreateGenreData>) => { return (options?.client ?? client).post<CreateGenreResponse, CreateGenreError>({
    ...options,
    url: '/genres'
}); };

export const updatePost = (options: Options<UpdatePostData>) => { return (options?.client ?? client).put<UpdatePostResponse, UpdatePostError>({
    ...options,
    url: '/artist'
}); };

export const updateAlbum = (options: Options<UpdateAlbumData>) => { return (options?.client ?? client).put<UpdateAlbumResponse, UpdateAlbumError>({
    ...options,
    url: '/album'
}); };

export const serveSongCover = (options: Options<ServeSongCoverData>) => { return (options?.client ?? client).get<ServeSongCoverResponse, ServeSongCoverError>({
    ...options,
    url: '/files/song/cover/{id}'
}); };

export const handleSongCoverUpload = (options: Options<HandleSongCoverUploadData>) => { return (options?.client ?? client).post<HandleSongCoverUploadResponse, HandleSongCoverUploadError>({
    ...options,
    ...formDataBodySerializer,
    url: '/files/song/cover/{id}'
}); };

export const serveSongAudio = (options: Options<ServeSongAudioData>) => { return (options?.client ?? client).get<ServeSongAudioResponse, ServeSongAudioError>({
    ...options,
    url: '/files/song/audio/{id}'
}); };

export const handleSongAudioUpload = (options: Options<HandleSongAudioUploadData>) => { return (options?.client ?? client).post<HandleSongAudioUploadResponse, HandleSongAudioUploadError>({
    ...options,
    ...formDataBodySerializer,
    url: '/files/song/audio/{id}'
}); };

export const serveArtistProfile = (options: Options<ServeArtistProfileData>) => { return (options?.client ?? client).get<ServeArtistProfileResponse, ServeArtistProfileError>({
    ...options,
    url: '/files/artist/profile/{id}'
}); };

export const handleArtistProfileUpload = (options: Options<HandleArtistProfileUploadData>) => { return (options?.client ?? client).post<HandleArtistProfileUploadResponse, HandleArtistProfileUploadError>({
    ...options,
    ...formDataBodySerializer,
    url: '/files/artist/profile/{id}'
}); };

export const serveAlbumCover = (options: Options<ServeAlbumCoverData>) => { return (options?.client ?? client).get<ServeAlbumCoverResponse, ServeAlbumCoverError>({
    ...options,
    url: '/files/album/cover/{id}'
}); };

export const handleAlbumCoverUpload = (options: Options<HandleAlbumCoverUploadData>) => { return (options?.client ?? client).post<HandleAlbumCoverUploadResponse, HandleAlbumCoverUploadError>({
    ...options,
    ...formDataBodySerializer,
    url: '/files/album/cover/{id}'
}); };

export const readArtists = (options?: Options) => { return (options?.client ?? client).get<ReadArtistsResponse, ReadArtistsError>({
    ...options,
    url: '/artists'
}); };

export const createArtist = (options: Options<CreateArtistData>) => { return (options?.client ?? client).post<CreateArtistResponse, CreateArtistError>({
    ...options,
    url: '/artists'
}); };

export const readAlbums = (options?: Options) => { return (options?.client ?? client).get<ReadAlbumsResponse, ReadAlbumsError>({
    ...options,
    url: '/albums'
}); };

export const createAlbum = (options: Options<CreateAlbumData>) => { return (options?.client ?? client).post<CreateAlbumResponse, CreateAlbumError>({
    ...options,
    url: '/albums'
}); };

export const readSong = (options: Options<ReadSongData>) => { return (options?.client ?? client).get<ReadSongResponse, ReadSongError>({
    ...options,
    url: '/songs/{id}'
}); };

export const deleteSong = (options: Options<DeleteSongData>) => { return (options?.client ?? client).delete<DeleteSongResponse, DeleteSongError>({
    ...options,
    url: '/songs/{id}'
}); };

export const recommendationsBasedOnSong = (options: Options<RecommendationsBasedOnSongData>) => { return (options?.client ?? client).get<RecommendationsBasedOnSongResponse, RecommendationsBasedOnSongError>({
    ...options,
    url: '/songs/{id}/recommendations'
}); };

export const readSongsOfGenre = (options: Options<ReadSongsOfGenreData>) => { return (options?.client ?? client).get<ReadSongsOfGenreResponse, ReadSongsOfGenreError>({
    ...options,
    url: '/songs/genre/{id}'
}); };

export const readSongsOfArtist = (options: Options<ReadSongsOfArtistData>) => { return (options?.client ?? client).get<ReadSongsOfArtistResponse, ReadSongsOfArtistError>({
    ...options,
    url: '/songs/artist/{id}'
}); };

export const readGenre = (options: Options<ReadGenreData>) => { return (options?.client ?? client).get<ReadGenreResponse, ReadGenreError>({
    ...options,
    url: '/genres/{id}'
}); };

export const deleteGenre = (options: Options<DeleteGenreData>) => { return (options?.client ?? client).delete<DeleteGenreResponse, DeleteGenreError>({
    ...options,
    url: '/genres/{id}'
}); };

export const readArtist = (options: Options<ReadArtistData>) => { return (options?.client ?? client).get<ReadArtistResponse, ReadArtistError>({
    ...options,
    url: '/artists/{id}'
}); };

export const readAlbum = (options: Options<ReadAlbumData>) => { return (options?.client ?? client).get<ReadAlbumResponse, ReadAlbumError>({
    ...options,
    url: '/albums/{id}'
}); };

export const readInfo = (options?: Options) => { return (options?.client ?? client).get<ReadInfoResponse, ReadInfoError>({
    ...options,
    url: '/'
}); };

export const deleteSong1 = (options: Options<DeleteSong1Data>) => { return (options?.client ?? client).delete<DeleteSong1Response, DeleteSong1Error>({
    ...options,
    url: '/artist/{id}'
}); };

export const deleteAlbum = (options: Options<DeleteAlbumData>) => { return (options?.client ?? client).delete<DeleteAlbumResponse, DeleteAlbumError>({
    ...options,
    url: '/album/{id}'
}); };