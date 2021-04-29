import Model, { attr } from '@ember-data/model';

class RoleModel extends Model
{
    @attr('string') name;
}

export default RoleModel;
