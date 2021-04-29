import { isEmpty } from '@ember/utils';

function hasAccess(acl, { roles, bannedRoles, requiredRoles })
{
    if (!isEmpty(roles) && !acl.has(...roles)) {
        return false;
    }
    if (!isEmpty(bannedRoles) && acl.has(...bannedRoles)) {
        return false;
    }
    if (!isEmpty(requiredRoles) && !acl.hasAll(...requiredRoles)) {
        return false;
    }
    return true;
}

export default hasAccess;
