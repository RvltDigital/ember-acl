import Model, { attr, hasMany } from '@ember-data/model';

class UserModel extends Model
{
    @attr('string') name;
    @hasMany('role') roles;
}

export default UserModel;
