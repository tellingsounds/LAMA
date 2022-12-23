/**
 * All the redux actions in one place.
 */
// app
export const APP_ACTIVATE_SEGMENT = 'APP_ACTIVATE_SEGMENT';
export const APP_CLEAR_ERROR = 'APP_CLEAR_ERROR';
export const APP_DEACTIVATE_SEGMENT = 'APP_DEACTIVATE_SEGMENT';
export const APP_ELEMENT_SAVED = 'APP_ELEMENT_SAVED';
export const APP_NEW_CLIP = 'APP_NEW_CLIP';
export const APP_SET_ANNOUNCEMENT_MESSAGE = 'APP_SET_ANNOUNCEMENT_MESSAGE';
export const APP_SET_CLIP_ACCORDIONS = 'APP_SET_CLIP_ACCORDIONS';
export const APP_SET_AUTH_STATUS = 'APP_SET_AUTH_STATUS';
export const APP_SET_EDITING_LEFT = 'APP_SET_EDITING_LEFT';
export const APP_TOGGLE_MODAL = 'APP_TOGGLE_MODAL';
export const APP_TOGGLE_SIDEPANEL = 'APP_TOGGLE_SIDEPANEL';
export const APP_LOGGED_OUT = 'APP_LOGGED_OUT';
export const APP_SET_USER_INFO = 'APP_SET_USER_INFO';

// clip
export const CLIPS_SET_CURRENT = 'CLIPS_SET_CURRENT';
export const CLIPS_UNSET_CURRENT = 'CLIPS_UNSET_CURRENT';
export const CLIPS_UPDATE_SEGMENT = 'CLIPS_UPDATE_SEGMENT';

// cliplist
export const CLIPLIST_REFLECT_FAVORITE = 'CLIPLIST_REFLECT_FAVORITE';
export const CLIPLIST_SET_PAGE = 'CLIPLIST_SET_PAGE';
export const CLIPLIST_UPDATE_CONFIG = 'CLIPLIST_UPDATE_CONFIG';
export const CLIPLIST_UPDATE_DATA = 'CLIPLIST_UPDATE_DATA';

// entities
export const ENTITIES_ADD = 'ENTITIES_ADD';
export const ENTITIES_ADD_MANY = 'ENTITIES_ADD_MANY';
export const ENTITIES_CLEAR = 'ENTITIES_CLEAR';
export const ENTITIES_SET = 'ENTITIES_SET';

// fetch/save
export const FETCH_REQUESTED = 'FETCH_REQUESTED';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_ERROR = 'FETCH_ERROR';
export const SAVE_REQUESTED = 'SAVE_REQUESTED';
export const SAVE_SUCCESS = 'SAVE_SUCCESS';
export const SAVE_ERROR = 'SAVE_ERROR';

// query
export const QUERY_CLEAR = 'QUERY_CLEAR';
export const QUERY_CLOSE_QB = 'QUERY_CLOSE_QB';
export const QUERY_NEW_BLOCK = 'QUERY_NEW_BLOCK';
export const QUERY_OPEN_QB = 'QUERY_OPEN_QB';
export const QUERY_REMOVE_BLOCK = 'QUERY_REMOVE_BLOCK';
export const QUERY_REMOVE_QB = 'QUERY_REMOVE_QB';
export const QUERY_TOGGLE_BLOCK_CONJ = 'QUERY_TOGGLE_BLOCK_CONJ';
export const QUERY_SAVE_QB_TEMPLATE = 'QUERY_SAVE_QB_TEMPLATE';
export const QUERY_SET_LOADING_STATE = 'QUERY_SET_LOADING_STATE';
export const QUERY_SET_RESULT = 'QUERY_SET_RESULT';
export const QUERY_SET_OPEN_QB_LABEL = 'QUERY_SET_OPEN_QB_LABEL';
export const QUERY_SET_OPEN_QB_STATE = 'QUERY_SET_OPEN_QB_STATE';
export const QUERY_SET_QB_VALUE = 'QUERY_SET_QB_VALUE';
export const QUERY_UPDATE_BLOCK_FILTER = 'QUERY_UPDATE_BLOCK_FILTER';
export const QUERY_UPDATE_BLOCK_RELATIONS = 'QUERY_UPDATE_BLOCK_RELATIONS';

// saga
export const SAGA_CLIP_OVERVIEW_RENDERED = 'SAGA_CLIP_OVERVIEW_RENDERED';
export const SAGA_DELETE_ANNOTATION = 'SAGA_DELETE_ANNOTATION';
export const SAGA_DELETE_ELEMENT = 'SAGA_DELETE_ELEMENT';
export const SAGA_DELETE_ENTITY = 'SAGA_DELETE_ENTITY';
export const SAGA_DELETE_SEGMENT = 'SAGA_DELETE_SEGMENT';
export const SAGA_ENTITY_SAVED = 'SAGA_ENTITY_SAVED';
export const SAGA_FETCH_CURRENT_CLIP = 'SAGA_FETCH_CURRENT_CLIP';
export const SAGA_FETCH_ENTITY = 'SAGA_FETCH_ENTITY';
export const SAGA_FETCH_USER = 'SAGA_FETCH_USER';
export const SAGA_GET_QUERY_RESULTS = 'SAGA_GET_QUERY_RESULTS';
export const SAGA_JUMP_TO = 'SAGA_JUMP_TO';
export const SAGA_LOGIN = 'SAGA_LOGIN';
export const SAGA_LOGOUT = 'SAGA_LOGOUT';
export const SAGA_READ_ONLY = 'SAGA_READ_ONLY';
export const SAGA_REFRESH = 'SAGA_REFRESH';
export const SAGA_SAVE_ANNOTATION = 'SAGA_SAVE_ANNOTATION';
export const SAGA_SAVE_CLIP = 'SAGA_SAVE_CLIP';
export const SAGA_SAVE_ELEMENT = 'SAGA_SAVE_ELEMENT';
export const SAGA_SAVE_ENTITY = 'SAGA_SAVE_ENTITY';
export const SAGA_SAVE_SEGMENT = 'SAGA_SAVE_SEGMENT';
export const SAGA_SET_FAVORITE_CLIP = 'SAGA_SET_FAVORITE_CLIP';
export const SAGA_SUCCESSFUL_REQUEST = 'SAGA_SUCCESSFUL_REQUEST';
export const SAGA_UPDATE_SEGMENT_ANNOTS = 'SAGA_UPDATE_SEGMENT_ANNOTS';
export const SAGA_WEBSOCKET_FAILED = 'SAGA_WEBSOCKET_FAILED';

// sidePanel
export const SIDEPANEL_ANNOTATION_SAVED = 'SIDEPANEL_ANNOTATION_SAVED';
export const SIDEPANEL_CLEAR_ANNOT_INSPECTOR =
  'SIDEPANEL_CLEAR_ANNOT_INSPECTOR';
export const SIDEPANEL_CLEAR_ENTITY_INSPECTOR =
  'SIDEPANEL_CLEAR_ENTITY_INSPECTOR';
export const SIDEPANEL_CREATE_CONNECTION = 'SIDEPANEL_CREATE_CONNECTION';
export const SIDEPANEL_CREATE_ENTITY = 'SIDEPANEL_CREATE_ENTITY';
export const SIDEPANEL_EDIT_CONNECTION = 'SIDEPANEL_EDIT_CONNECTION';
export const SIDEPANEL_EDIT_ENTITY = 'SIDEPANEL_EDIT_ENTITY';
export const SIDEPANEL_SHOW_CONNECTION = 'SIDEPANEL_SHOW_CONNECTION';
export const SIDEPANEL_SHOW_CLIP = 'SIDEPANEL_SHOW_CLIP';
export const SIDEPANEL_SHOW_ENTITY = 'SIDEPANEL_SHOW_ENTITY';
export const SIDEPANEL_STOP_EDITING_CONNECTION =
  'SIDEPANEL_STOP_EDITING_CONNECTION';
export const SIDEPANEL_STOP_EDITING_ENTITY = 'SIDEPANEL_STOP_EDITING_ENTITY';
export const SIDEPANEL_TOGGLE_ACCORDION = 'SIDEPANEL_TOGGLE_ACCORDION';
export const SIDEPANEL_TOGGLE_EDITING_SEGMENT =
  'SIDEPANEL_TOGGLE_EDITING_SEGMENT';