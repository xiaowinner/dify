"""add dataset permission tenant id

Revision ID: 161cadc1af8d
Revises: 7e6a8693e07a
Create Date: 2024-07-05 14:30:59.472593

"""
import sqlalchemy as sa
from alembic import op

import models as models

# revision identifiers, used by Alembic.
revision = '161cadc1af8d'
down_revision = '7e6a8693e07a'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('dataset_permissions', schema=None) as batch_op:
        # Step 1: Add column without NOT NULL constraint
        op.add_column('dataset_permissions', sa.Column('tenant_id', sa.UUID(), nullable=True))

        # Step 2: Update the column to set a default value for existing rows
        op.execute(
            """
        UPDATE dataset_permissions
        SET tenant_id = (
            SELECT tenant_id
            FROM datasets
            WHERE datasets.id = dataset_permissions.dataset_id
        )
        """
        )

        # Step 3: Alter column to NOT NULL
        op.alter_column('dataset_permissions', 'tenant_id', nullable=False)

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('dataset_permissions', schema=None) as batch_op:
        batch_op.drop_column('tenant_id')

    # ### end Alembic commands ###
